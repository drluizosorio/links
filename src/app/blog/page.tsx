import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Artigos sobre Saúde e Bem-estar',
  description: 'Artigos especializados sobre medicina preventiva, nutrição, exercícios e qualidade de vida. Conteúdo educativo baseado em evidências científicas.',
  keywords: ['blog médico', 'artigos saúde', 'medicina preventiva', 'nutrição', 'bem-estar', 'qualidade de vida'],
  path: '/blog',
})

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  LazyBlogSearchWithSuspense as BlogSearch,
  LazyBlogCategoriesWithSuspense as BlogCategories,
  LazyBlogTagsWithSuspense as BlogTags
} from "@/components/lazy-components"
import { 
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Filter,
  Search,
  Heart,
  Brain,
  Stethoscope,
  Target
} from "lucide-react"
import Link from "next/link"
'use client'

import { useState, useMemo } from "react"

export default function BlogPage() {
  // Dados mockados dos posts - futuramente virão de um CMS ou banco de dados
  const blogPosts = [
    {
      id: 1,
      title: "A Filosofia Estoica na Prática Médica Moderna",
      excerpt: "Como os ensinamentos de Marco Aurélio e Epicteto podem transformar a relação médico-paciente e promover uma medicina mais humana e eficaz.",
      content: "raiz",
      category: "Filosofia",
      readTime: "12 min",
      publishedAt: "2024-01-15",
      author: "Dr. Luiz Osório",
      tags: ["filosofia", "estoicismo", "medicina", "humanização"],
      featured: true
    },
    {
      id: 2,
      title: "5 Dicas Rápidas para Acelerar o Metabolismo",
      excerpt: "Estratégias práticas e baseadas em evidências para otimizar seu metabolismo no dia a dia.",
      content: "nutella",
      category: "Emagrecimento",
      readTime: "3 min",
      publishedAt: "2024-01-12",
      author: "Dr. Luiz Osório",
      tags: ["metabolismo", "emagrecimento", "dicas"],
      featured: false
    },
    {
      id: 3,
      title: "Medicina Centrada na Pessoa: Além do Diagnóstico",
      excerpt: "Uma reflexão profunda sobre como a medicina moderna pode resgatar sua essência humanística sem perder o rigor científico.",
      content: "raiz",
      category: "Medicina",
      readTime: "15 min",
      publishedAt: "2024-01-10",
      author: "Dr. Luiz Osório",
      tags: ["medicina", "humanização", "diagnóstico", "pessoa"],
      featured: true
    },
    {
      id: 4,
      title: "Protocolo de Hidratação para Performance",
      excerpt: "Como otimizar sua hidratação para melhorar performance física e mental.",
      content: "nutella",
      category: "Performance",
      readTime: "4 min",
      publishedAt: "2024-01-08",
      author: "Dr. Luiz Osório",
      tags: ["hidratação", "performance", "saúde"],
      featured: false
    },
    {
      id: 5,
      title: "O Paradoxo da Longevidade: Viver Mais vs Viver Melhor",
      excerpt: "Uma análise filosófica e científica sobre o que realmente significa envelhecer com qualidade de vida.",
      content: "raiz",
      category: "Longevidade",
      readTime: "18 min",
      publishedAt: "2024-01-05",
      author: "Dr. Luiz Osório",
      tags: ["longevidade", "qualidade de vida", "envelhecimento"],
      featured: false
    }
  ]

  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Extrair categorias e tags únicas
  const categories = useMemo(() => {
    const categoryCount: { [key: string]: number } = {}
    blogPosts.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1
    })
    return Object.entries(categoryCount).map(([name, count]) => ({ name, count }))
  }, [])

  const allTags = useMemo(() => {
    const tagCount: { [key: string]: number } = {}
    blogPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    })
    return Object.entries(tagCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    // Aplicar filtros
    let filtered = blogPosts
    if (category !== 'all') {
      filtered = filtered.filter(post => post.category === category)
    }
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.every(tag => post.tags.includes(tag))
      )
    }
    setFilteredPosts(filtered)
  }

  const handleTagToggle = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    
    setSelectedTags(newSelectedTags)
    
    // Aplicar filtros
    let filtered = blogPosts
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }
    if (newSelectedTags.length > 0) {
      filtered = filtered.filter(post =>
        newSelectedTags.every(tag => post.tags.includes(tag))
      )
    }
    setFilteredPosts(filtered)
  }

  const raizPosts = filteredPosts.filter(post => post.content === "raiz")
  const nutellaPosts = filteredPosts.filter(post => post.content === "nutella")

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Filosofia": return Brain
      case "Medicina": return Stethoscope
      case "Emagrecimento": return Target
      case "Performance": return Target
      case "Longevidade": return Heart
      default: return BookOpen
    }
  }

  const renderPostCard = (post: typeof blogPosts[0]) => {
    const IconComponent = getCategoryIcon(post.category)
    
    return (
      <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-3">
            <Badge className={`${
              post.content === "raiz" 
                ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white" 
                : "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
            } border-0`}>
              <IconComponent className="w-3 h-3 mr-1" />
              {post.content === "raiz" ? "Conteúdo Raiz" : "Conteúdo Nutella"}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm"
              className="group-hover:bg-amber-100 dark:group-hover:bg-amber-900/20 group-hover:text-amber-700 dark:group-hover:text-amber-400"
              asChild
            >
              <Link href={`/blog/${post.id}`}>
                Ler mais
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-4">
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog do Dr. Luiz Osório
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflexões sobre medicina, filosofia, performance e desenvolvimento humano
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <BlogCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
            
            <BlogTags
              tags={allTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogSearch
              posts={blogPosts}
              onFilteredPosts={setFilteredPosts}
              categories={categories.map(c => c.name)}
              allTags={allTags.map(t => t.name)}
            />

            {/* Posts Raiz */}
            {raizPosts.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl mr-4">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Conteúdo Raiz
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Reflexões profundas e análises detalhadas
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {raizPosts.map(renderPostCard)}
                </div>
              </section>
            )}

            {/* Posts Nutella */}
            {nutellaPosts.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl mr-4">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Conteúdo Nutella
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dicas práticas e conteúdo direto ao ponto
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nutellaPosts.map(renderPostCard)}
                </div>
              </section>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Nenhum post encontrado
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tente ajustar os filtros ou termos de busca
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}