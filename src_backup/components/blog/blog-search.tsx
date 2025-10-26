'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Filter, X, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { debounce } from '@/lib/cache'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  publishedAt: string
  author: string
  tags: string[]
  featured: boolean
}

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts: (posts: BlogPost[]) => void
  categories: string[]
  allTags: string[]
}

export default function BlogSearch({ posts, onFilteredPosts, categories, allTags }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [contentType, setContentType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Debounced search function for better performance
  const debouncedSearch = useMemo(
    () => debounce((term: string) => {
      setSearchTerm(term)
    }, 300),
    []
  )

  // Memoized filtered posts for performance
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filtro por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filtro por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filtro por tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.every(tag => post.tags.includes(tag))
      )
    }

    // Filtro por tipo de conteúdo
    if (contentType !== 'all') {
      filtered = filtered.filter(post => post.content === contentType)
    }

    return filtered
  }, [posts, searchTerm, selectedCategory, selectedTags, contentType])

  // Update parent component with filtered posts
  useEffect(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
    setContentType('all')
  }

  const hasActiveFilters = searchTerm || selectedCategory !== 'all' || selectedTags.length > 0 || contentType !== 'all'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
      {/* Busca principal */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar posts por título, conteúdo ou tags..."
          onChange={(e) => debouncedSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Filtros */}
      <div className="space-y-4">
        {/* Tipo de conteúdo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tipo de Conteúdo
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setContentType('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                contentType === 'all'
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setContentType('raiz')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                contentType === 'raiz'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Conteúdo Raiz
            </button>
            <button
              onClick={() => setContentType('nutella')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                contentType === 'nutella'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Conteúdo Nutella
            </button>
          </div>
        </div>

        {/* Categorias */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Categoria
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="all">Todas as categorias</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Tag className="w-3 h-3 mr-1" />
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tags selecionadas e limpar filtros */}
      {hasActiveFilters && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {selectedTags.map(tag => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                >
                  #{tag}
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="ml-1 hover:text-amber-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4 mr-1" />
              Limpar filtros
            </Button>
          </div>
        </div>
      )}

      {/* Resultados */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {filteredPosts.length === posts.length
            ? `${posts.length} posts encontrados`
            : `${filteredPosts.length} de ${posts.length} posts`
          }
        </div>
    </div>
  )
}