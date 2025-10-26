'use client'

import { useState, useMemo, ChangeEvent } from "react"
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

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  tags: string[]
  category: string
  image: string
  slug: string
}

interface BlogPageClientProps {
  blogPosts: BlogPost[]
}

export default function BlogPageClient({ blogPosts }: BlogPageClientProps) {
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
  }, [blogPosts])

  const allTags = useMemo(() => {
    const tagCount: { [key: string]: number } = {}
    blogPosts.forEach(post => {
      post.tags.forEach((tag: string) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    })
    return Object.entries(tagCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }, [blogPosts])

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Nutrição": return Target
      case "Exercícios": return Heart
      case "Saúde Mental": return Brain
      case "Bem-estar": return Heart
      case "Prevenção": return Stethoscope
      default: return BookOpen
    }
  }

  const renderPostCard = (post: BlogPost) => {
    const IconComponent = getCategoryIcon(post.category)
    
    return (
      <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-0">
              <IconComponent className="w-3 h-3 mr-1" />
              {post.category}
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
                {new Date(post.date).toLocaleDateString('pt-BR')}
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
              <Link href={`/blog/${post.slug}`}>
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
            Artigos sobre saúde, bem-estar e medicina preventiva
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

            {/* Posts Grid */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map(renderPostCard)}
              </div>
            </section>

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