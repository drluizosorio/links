// Cache utilities for performance optimization
export class CacheManager {
  private static instance: CacheManager
  private memoryCache: Map<string, { data: any; timestamp: number; ttl: number }>
  private readonly DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes

  private constructor() {
    this.memoryCache = new Map()
  }

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager()
    }
    return CacheManager.instance
  }

  // Memory cache methods
  set(key: string, data: any, ttl: number = this.DEFAULT_TTL): void {
    this.memoryCache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  get(key: string): any | null {
    const cached = this.memoryCache.get(key)
    if (!cached) return null

    const isExpired = Date.now() - cached.timestamp > cached.ttl
    if (isExpired) {
      this.memoryCache.delete(key)
      return null
    }

    return cached.data
  }

  // Local storage cache methods (for client-side only)
  setLocal(key: string, data: any, ttl: number = this.DEFAULT_TTL): void {
    if (typeof window === 'undefined') return

    const cacheData = {
      data,
      timestamp: Date.now(),
      ttl
    }

    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData))
    } catch (error) {
      console.warn('Failed to set local cache:', error)
    }
  }

  getLocal(key: string): any | null {
    if (typeof window === 'undefined') return null

    try {
      const cached = localStorage.getItem(`cache_${key}`)
      if (!cached) return null

      const parsedCache = JSON.parse(cached)
      const isExpired = Date.now() - parsedCache.timestamp > parsedCache.ttl

      if (isExpired) {
        localStorage.removeItem(`cache_${key}`)
        return null
      }

      return parsedCache.data
    } catch (error) {
      console.warn('Failed to get local cache:', error)
      return null
    }
  }

  // Clear methods
  clear(): void {
    this.memoryCache.clear()
  }

  clearLocal(): void {
    if (typeof window === 'undefined') return

    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith('cache_')) {
        localStorage.removeItem(key)
      }
    })
  }

  // Utility method for memoization
  memoize<T extends (...args: any[]) => any>(
    fn: T,
    keyGenerator?: (...args: Parameters<T>) => string,
    ttl?: number
  ): T {
    return ((...args: Parameters<T>) => {
      const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)
      
      let cached = this.get(key)
      if (cached !== null) {
        return cached
      }

      const result = fn(...args)
      this.set(key, result, ttl)
      return result
    }) as T
  }
}

// Export singleton instance
export const cache = CacheManager.getInstance()

// Utility hooks for React components
export function useMemoizedValue<T>(
  factory: () => T,
  deps: any[],
  key: string,
  ttl?: number
): T {
  const cacheKey = `${key}_${JSON.stringify(deps)}`
  
  let cached = cache.get(cacheKey)
  if (cached !== null) {
    return cached
  }

  const value = factory()
  cache.set(cacheKey, value, ttl)
  return value
}

// Image optimization utilities
export function optimizeImageUrl(url: string, width?: number, height?: number, quality: number = 80): string {
  if (!url) return url
  
  // For external images, return as-is
  if (url.startsWith('http')) return url
  
  // For local images, add optimization parameters
  const params = new URLSearchParams()
  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  params.set('q', quality.toString())
  
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}${params.toString()}`
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}