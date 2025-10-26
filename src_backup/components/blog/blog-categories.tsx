'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Brain, 
  Heart, 
  Stethoscope, 
  Target, 
  BookOpen, 
  Zap,
  Award,
  Users
} from 'lucide-react'

interface BlogCategoriesProps {
  categories: { name: string; count: number }[]
  selectedCategory: string
  onCategorySelect: (category: string) => void
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'filosofia': return Brain
    case 'medicina': return Stethoscope
    case 'emagrecimento': return Target
    case 'performance': return Zap
    case 'longevidade': return Heart
    case 'educação': return BookOpen
    case 'liderança': return Award
    default: return Users
  }
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'filosofia': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'medicina': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'emagrecimento': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'performance': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'longevidade': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'educação': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    case 'liderança': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

export default function BlogCategories({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: BlogCategoriesProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Categorias
      </h3>
      
      <div className="space-y-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'ghost'}
          className={`w-full justify-start ${
            selectedCategory === 'all' 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          onClick={() => onCategorySelect('all')}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Todas as categorias
          <Badge variant="secondary" className="ml-auto">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </Badge>
        </Button>
        
        {categories.map(category => {
          const IconComponent = getCategoryIcon(category.name)
          const isSelected = selectedCategory === category.name
          
          return (
            <Button
              key={category.name}
              variant={isSelected ? 'default' : 'ghost'}
              className={`w-full justify-start ${
                isSelected 
                  ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => onCategorySelect(category.name)}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {category.name}
              <Badge 
                variant="secondary" 
                className={`ml-auto ${isSelected ? 'bg-white/20 text-white' : ''}`}
              >
                {category.count}
              </Badge>
            </Button>
          )
        })}
      </div>
    </div>
  )
}