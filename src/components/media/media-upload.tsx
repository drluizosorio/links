'use client'

import { useState, useCallback } from 'react'
import { Upload, X, FileImage, FileVideo, FileAudio, File } from 'lucide-react'

interface MediaFile {
  id: string
  name: string
  type: 'image' | 'video' | 'audio' | 'document'
  size: number
  url: string
  uploadedAt: Date
}

interface MediaUploadProps {
  onUpload: (files: MediaFile[]) => void
  acceptedTypes?: string[]
  maxSize?: number // em MB
  multiple?: boolean
}

export default function MediaUpload({ 
  onUpload, 
  acceptedTypes = ['image/*', 'video/*', 'audio/*'],
  maxSize = 50,
  multiple = true 
}: MediaUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<MediaFile[]>([])

  const getFileType = (file: File): 'image' | 'video' | 'audio' | 'document' => {
    if (file.type.startsWith('image/')) return 'image'
    if (file.type.startsWith('video/')) return 'video'
    if (file.type.startsWith('audio/')) return 'audio'
    return 'document'
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <FileImage className="w-8 h-8 text-blue-500" />
      case 'video': return <FileVideo className="w-8 h-8 text-purple-500" />
      case 'audio': return <FileAudio className="w-8 h-8 text-green-500" />
      default: return <File className="w-8 h-8 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFiles = useCallback(async (files: FileList) => {
    setUploading(true)
    const newFiles: MediaFile[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      // Validar tamanho
      if (file.size > maxSize * 1024 * 1024) {
        alert(`Arquivo ${file.name} é muito grande. Máximo: ${maxSize}MB`)
        continue
      }

      // Simular upload (em produção, seria uma chamada para API)
      const mediaFile: MediaFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: getFileType(file),
        size: file.size,
        url: URL.createObjectURL(file),
        uploadedAt: new Date()
      }

      newFiles.push(mediaFile)
    }

    setUploadedFiles(prev => [...prev, ...newFiles])
    onUpload(newFiles)
    setUploading(false)
  }, [maxSize, onUpload])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFiles(files)
    }
  }, [handleFiles])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      handleFiles(files)
    }
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Área de Upload */}
      <div
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200
          ${isDragging 
            ? 'border-amber-400 bg-amber-50 dark:bg-amber-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-amber-400'
          }
          ${uploading ? 'opacity-50 pointer-events-none' : ''}
        `}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-semibold mb-2">
          {uploading ? 'Fazendo upload...' : 'Arraste arquivos aqui ou clique para selecionar'}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Suporte para imagens, vídeos e áudios até {maxSize}MB
        </p>
        
        <input
          type="file"
          multiple={multiple}
          accept={acceptedTypes.join(',')}
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
          disabled={uploading}
        />
        
        <label
          htmlFor="file-upload"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 cursor-pointer"
        >
          <Upload className="w-5 h-5 mr-2" />
          Selecionar Arquivos
        </label>
      </div>

      {/* Lista de Arquivos Enviados */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Arquivos Enviados ({uploadedFiles.length})</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 relative group"
              >
                <button
                  onClick={() => removeFile(file.id)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-start space-x-3">
                  {getFileIcon(file.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(file.size)}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {file.uploadedAt.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Preview para imagens */}
                {file.type === 'image' && (
                  <div className="mt-3">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                )}

                {/* Preview para vídeos */}
                {file.type === 'video' && (
                  <div className="mt-3">
                    <video
                      src={file.url}
                      className="w-full h-32 object-cover rounded-md"
                      controls
                    />
                  </div>
                )}

                {/* Preview para áudios */}
                {file.type === 'audio' && (
                  <div className="mt-3">
                    <audio
                      src={file.url}
                      className="w-full"
                      controls
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}