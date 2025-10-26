'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tag, ChevronDown, ChevronUp } from 'lucide-react'

interface BlogTagsProps {
  tags: { name: string; count: number }[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  maxVisible?: number
}

export default function BlogTags({ 
  tags, 
  selectedTags, 
  onTagToggle,
  maxVisible = 10
}: BlogTagsProps) {
  const [showAll, setShowAll] = useState(false)
  
  const visibleTags = showAll ? tags : tags.slice(0, maxVisible)
  const hasMoreTags = tags.length > maxVisible

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        Tags Populares
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleTags.map(tag => {
          const isSelected = selectedTags.includes(tag.name)
          
          return (
            <button
              key={tag.name}
              onClick={() => onTagToggle(tag.name)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                isSelected
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              #{tag.name}
              <Badge 
                variant="secondary" 
                className={`ml-2 text-xs ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}
              >
                {tag.count}
              </Badge>
            </button>
          )
        })}
      </div>

      {hasMoreTags && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAll(!showAll)}
          className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          {showAll ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Mostrar menos
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Mostrar mais ({tags.length - maxVisible} tags)
            </>
          )}
        </Button>
      )}

      {selectedTags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Tags selecionadas:
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedTags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 cursor-pointer hover:bg-amber-200 dark:hover:bg-amber-800"
                onClick={() => onTagToggle(tag)}
              >
                #{tag} ×
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}