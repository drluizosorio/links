import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Heart,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function NutellaPage() {
  // Posts Nutella - conteúdo rápido e prático
  const nutellaPosts = [
    {
      id: 1,
      title: "5 Dicas Rápidas para Acelerar o Metabolismo",
      excerpt: "Estratégias práticas e baseadas em evidências para otimizar seu metabolismo no dia a dia.",
      category: "Emagrecimento",
      readTime: "3 min",
      publishedAt: "2024-01-12",
      tips: ["Beba água gelada ao acordar", "Faça exercícios HIIT 3x/semana", "Consuma proteína em todas as refeições", "Durma 7-8 horas por noite", "Tome sol pela manhã"],
      featured: true
    },
    {
      id: 2,
      title: "Protocolo de Hidratação para Performance",
      excerpt: "Como otimizar sua hidratação para melhorar performance física e mental.",
      category: "Performance",
      readTime: "4 min",
      publishedAt: "2024-01-08",
      tips: ["35ml/kg de peso corporal", "Adicione eletrólitos nos treinos", "Monitore a cor da urina", "Hidrate-se antes da sede"],
      featured: false
    },
    {
      id: 3,
      title: "Suplementos Essenciais: O Básico que Funciona",
      excerpt: "Os únicos suplementos que realmente fazem diferença na sua saúde.",
      category: "Suplementação",
      readTime: "5 min",
      publishedAt: "2024-01-05",
      tips: ["Vitamina D3", "Ômega 3", "Magnésio", "Probióticos", "Vitamina B12"],
      featured: false
    },
    {
      id: 4,
      title: "Jejum Intermitente: Guia Prático para Iniciantes",
      excerpt: "Como começar o jejum intermitente de forma segura e eficaz.",
      category: "Emagrecimento",
      readTime: "6 min",
      publishedAt: "2024-01-03",
      tips: ["Comece com 12h de jejum", "Hidrate-se bem", "Mantenha as refeições nutritivas", "Escute seu corpo"],
      featured: true
    },
    {
      id: 5,
      title: "Exercícios de 10 Minutos para o Dia Corrido",
      excerpt: "Treino rápido e eficiente para quem tem pouco tempo.",
      category: "Exercícios",
      readTime: "2 min",
      publishedAt: "2024-01-01",
      tips: ["Burpees", "Agachamentos", "Flexões", "Prancha", "Mountain climbers"],
      featured: false
    }
  ]

  const PostCard = ({ post, variant = "default" }: { post: any, variant?: "default" | "featured" }) => {
    return (
      <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        variant === "featured" 
          ? "md:col-span-2 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800" 
          : "bg-white dark:bg-gray-800"
      }`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0">
              <Heart className="w-3 h-3 mr-1" />
              Nutella
            </Badge>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h3 className={`font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors ${
            variant === "featured" ? "text-xl md:text-2xl" : "text-lg"
          }`}>
            {post.title}
          </h3>
          
          <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
            variant === "featured" ? "text-base" : "text-sm"
          }`}>
            {post.excerpt}
          </p>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Dicas rápidas */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <Lightbulb className="w-4 h-4 mr-1 text-pink-500" />
              Dicas Rápidas:
            </h4>
            <ul className="space-y-1">
              {post.tips.slice(0, variant === "featured" ? 5 : 3).map((tip: string, index: number) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                Dr. Luiz Osório
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="group-hover:bg-pink-100 dark:group-hover:bg-pink-900/20 group-hover:text-pink-700 dark:group-hover:text-pink-400"
              asChild
            >
              <Link href={`/blog/${post.id}`}>
                Ver completo
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Conteúdo Nutella
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Dicas rápidas, práticas e direto ao ponto. Conteúdo fácil de consumir 
            para quem quer resultados sem complicação.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                {nutellaPosts.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Posts Nutella</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                2-6
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Min de leitura</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Prático</div>
            </div>
          </div>
        </div>

        {/* Características do Conteúdo Nutella */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800">
            <Zap className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Rápido</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Conteúdo que você consome em poucos minutos
            </p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800">
            <Target className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Direto ao Ponto</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sem enrolação, só o que realmente importa
            </p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800">
            <TrendingUp className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Aplicável</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dicas que você pode usar imediatamente
            </p>
          </Card>
        </div>

        {/* Posts em Destaque */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Posts em Destaque
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {nutellaPosts.filter(post => post.featured).map((post) => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </div>

        {/* Todos os Posts Nutella */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Todos os Posts Nutella
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nutellaPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/blog">
                Ver todos os posts
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white" asChild>
              <Link href="/blog">
                Conteúdo Raiz
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}