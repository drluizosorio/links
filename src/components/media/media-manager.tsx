'use client'

import { useState } from 'react'
import MediaUpload from './media-upload'
import MediaGallery from './media-gallery'
import { Upload, FolderOpen, BarChart3 } from 'lucide-react'

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

export default function MediaManager() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([
    // Dados de exemplo
    {
      id: '1',
      name: 'consulta-medica.jpg',
      type: 'image',
      size: 2048576,
      url: '/api/placeholder/400/300',
      uploadedAt: new Date('2024-01-15'),
      tags: ['medicina', 'consulta'],
      description: 'Imagem de consulta médica'
    },
    {
      id: '2',
      name: 'video-explicativo.mp4',
      type: 'video',
      size: 15728640,
      url: '/api/placeholder/video',
      uploadedAt: new Date('2024-01-14'),
      tags: ['educação', 'medicina'],
      description: 'Vídeo explicativo sobre procedimentos'
    },
    {
      id: '3',
      name: 'podcast-saude.mp3',
      type: 'audio',
      size: 8388608,
      url: '/api/placeholder/audio',
      uploadedAt: new Date('2024-01-13'),
      tags: ['podcast', 'saúde'],
      description: 'Episódio sobre saúde preventiva'
    }
  ])

  const [activeTab, setActiveTab] = useState('gallery')

  const handleUpload = (newFiles: MediaFile[]) => {
    setMediaFiles(prev => [...prev, ...newFiles])
  }

  const handleDelete = (id: string) => {
    setMediaFiles(prev => prev.filter(file => file.id !== id))
  }

  const getStats = () => {
    const totalFiles = mediaFiles.length
    const totalSize = mediaFiles.reduce((acc, file) => acc + file.size, 0)
    const typeCount = mediaFiles.reduce((acc, file) => {
      acc[file.type] = (acc[file.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return { totalFiles, totalSize, typeCount }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const stats = getStats()

  const tabs = [
    { id: 'gallery', label: 'Galeria', icon: FolderOpen },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'stats', label: 'Estatísticas', icon: BarChart3 }
  ]

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 space-x-2
                ${activeTab === tab.id 
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'gallery' && (
        <div className="space-y-6">
          <MediaGallery 
            files={mediaFiles} 
            onDelete={handleDelete}
            selectable={true}
          />
        </div>
      )}

      {activeTab === 'upload' && (
        <div className="space-y-6">
          <MediaUpload onUpload={handleUpload} />
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total de Arquivos */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total de Arquivos
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.totalFiles}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <FolderOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            {/* Tamanho Total */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Tamanho Total
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formatFileSize(stats.totalSize)}
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            {/* Imagens */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Imagens
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.typeCount.image || 0}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <div className="w-6 h-6 bg-purple-600 dark:bg-purple-400 rounded"></div>
                </div>
              </div>
            </div>

            {/* Vídeos */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Vídeos
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stats.typeCount.video || 0}
                  </p>
                </div>
                <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-full">
                  <div className="w-6 h-6 bg-amber-600 dark:bg-amber-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico de Distribuição por Tipo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Distribuição por Tipo
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.typeCount).map(([type, count]) => {
                const percentage = (count / stats.totalFiles) * 100
                const colors = {
                  image: 'bg-blue-500',
                  video: 'bg-purple-500',
                  audio: 'bg-green-500',
                  document: 'bg-gray-500'
                }
                
                return (
                  <div key={type} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                      {type}
                    </div>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${colors[type as keyof typeof colors]}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-sm text-gray-600 dark:text-gray-400 text-right">
                      {count} ({percentage.toFixed(1)}%)
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Arquivos Recentes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Arquivos Recentes
            </h3>
            <div className="space-y-3">
              {mediaFiles
                .sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())
                .slice(0, 5)
                .map((file) => (
                  <div key={file.id} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                        {file.type.slice(0, 3)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)} • {file.uploadedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}