'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Grid, List, Play, Download, Eye, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface MediaFile {
  id: string
  name: string
  type: 'image' | 'video' | 'audio' | 'document'
  size: number
  url: string
  uploadedAt: Date
  tags?: string[]
  description?: string
}

interface MediaGalleryProps {
  files: MediaFile[]
  onDelete?: (id: string) => void
  onSelect?: (file: MediaFile) => void
  selectable?: boolean
}

export default function MediaGallery({ 
  files, 
  onDelete, 
  onSelect, 
  selectable = false 
}: MediaGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'audio' | 'document'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])

  const filteredFiles = useMemo(() => {
    return files.filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           file.description?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filterType === 'all' || file.type === filterType
      
      return matchesSearch && matchesType
    })
  }, [files, searchTerm, filterType])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (date: Date) => {
    // Formatação consistente para evitar erros de hidratação
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handleFileSelect = (file: MediaFile) => {
    if (selectable) {
      setSelectedFiles(prev => 
        prev.includes(file.id) 
          ? prev.filter(id => id !== file.id)
          : [...prev, file.id]
      )
    }
    onSelect?.(file)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'image': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'video': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'audio': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="w-full">
      {/* Controles */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Busca */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar arquivos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Filtro por tipo */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="all">Todos os tipos</option>
            <option value="image">Imagens</option>
            <option value="video">Vídeos</option>
            <option value="audio">Áudios</option>
            <option value="document">Documentos</option>
          </select>
        </div>

        {/* Modo de visualização */}
        <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 ${viewMode === 'grid' 
              ? 'bg-amber-500 text-white' 
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 ${viewMode === 'list' 
              ? 'bg-amber-500 text-white' 
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        Mostrando {filteredFiles.length} de {files.length} arquivos
        {selectedFiles.length > 0 && ` • ${selectedFiles.length} selecionados`}
      </div>

      {/* Galeria */}
      {filteredFiles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Nenhum arquivo encontrado
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tente ajustar os filtros ou termos de busca
          </p>
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            : 'space-y-2'
        }>
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className={`
                bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden
                ${selectable ? 'cursor-pointer' : ''}
                ${selectedFiles.includes(file.id) ? 'ring-2 ring-amber-500' : ''}
                ${viewMode === 'list' ? 'flex items-center p-4' : 'group hover:shadow-lg transition-shadow duration-200'}
              `}
              onClick={() => handleFileSelect(file)}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Preview */}
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 relative">
                    {file.type === 'image' && (
                      <Image
                        src={file.url}
                        alt={file.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {file.type === 'video' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <Play className="w-12 h-12 text-purple-500" />
                      </div>
                    )}
                    {file.type === 'audio' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay com ações */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(file.url, '_blank')
                        }}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const link = document.createElement('a')
                          link.href = file.url
                          link.download = file.name
                          link.click()
                        }}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Download className="w-4 h-4 text-gray-700" />
                      </button>
                      {onDelete && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onDelete(file.id)
                          }}
                          className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white truncate mb-1">
                      {file.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(file.type)}`}>
                        {file.type}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {formatDate(file.uploadedAt)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Vista em lista */}
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    {file.type === 'image' && (
                      <Image
                        src={file.url}
                        alt={file.name}
                        width={48}
                        height={48}
                        className="object-cover rounded-lg"
                      />
                    )}
                    {file.type === 'video' && <Play className="w-6 h-6 text-purple-500" />}
                    {file.type === 'audio' && <Play className="w-6 h-6 text-green-500" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 dark:text-white truncate">
                      {file.name}
                    </h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(file.type)}`}>
                        {file.type}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)}
                      </span>
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        {formatDate(file.uploadedAt)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(file.url, '_blank')
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        const link = document.createElement('a')
                        link.href = file.url
                        link.download = file.name
                        link.click()
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    {onDelete && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onDelete(file.id)
                        }}
                        className="p-2 text-red-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}