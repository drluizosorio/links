import { Metadata } from 'next'
import { generateBlogMetadata, generateArticleStructuredData } from '@/lib/seo'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Heart,
  Brain,
  Stethoscope,
  Target,
  Award,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

// Dados mockados - futuramente virão de um CMS ou banco de dados
const blogPosts = {
  1: {
    id: 1,
    title: "A Filosofia Estoica na Prática Médica Moderna",
    excerpt: "Como os ensinamentos de Marco Aurélio e Epicteto podem transformar a relação médico-paciente e promover uma medicina mais humana e eficaz.",
    content: "raiz",
    category: "Filosofia",
    readTime: "12 min",
    publishedAt: "2024-01-15",
    author: "Dr. Luiz Osório",
    tags: ["filosofia", "estoicismo", "medicina", "humanização"],
    featured: true,
    fullContent: `
      <h2>A Medicina Encontra a Filosofia</h2>
      <p>Há mais de dois mil anos, os filósofos estoicos já compreendiam algo que a medicina moderna está redescobrindo: a importância de tratar não apenas os sintomas, mas a pessoa como um todo. Marco Aurélio, em suas "Meditações", nos ensina que "você tem poder sobre sua mente - não sobre eventos externos. Perceba isso, e você encontrará força."</p>
      
      <h3>Os Pilares do Estoicismo na Medicina</h3>
      <p>O estoicismo oferece três pilares fundamentais que podem revolucionar nossa prática médica:</p>
      
      <h4>1. Foco no que podemos controlar</h4>
      <p>Como médicos, frequentemente nos deparamos com situações que fogem ao nosso controle. A filosofia estoica nos ensina a distinguir claramente entre o que está em nosso poder e o que não está. Podemos controlar nossa preparação, nossa dedicação ao estudo, nossa presença durante a consulta, mas não podemos controlar todos os desfechos.</p>
      
      <h4>2. Aceitação da impermanência</h4>
      <p>A medicina lida constantemente com a fragilidade da vida humana. O estoicismo nos prepara para aceitar essa realidade sem nos tornarmos insensíveis. Epicteto nos lembra: "Não são os eventos que nos perturbam, mas nossos julgamentos sobre eles."</p>
      
      <h4>3. Virtude como guia</h4>
      <p>Para os estoicos, a virtude é o único bem verdadeiro. Na medicina, isso se traduz em integridade, compaixão, justiça e coragem - valores que devem guiar cada decisão clínica.</p>
      
      <h3>Aplicação Prática no Consultório</h3>
      <p>Como podemos aplicar esses ensinamentos no dia a dia médico?</p>
      
      <ul>
        <li><strong>Presença plena:</strong> Durante cada consulta, pratique a atenção total ao paciente, sem julgamentos precipitados.</li>
        <li><strong>Comunicação compassiva:</strong> Use a linguagem como ferramenta de cura, não apenas de diagnóstico.</li>
        <li><strong>Aceitação dos limites:</strong> Reconheça quando não sabemos algo e busque ajuda sem ego.</li>
        <li><strong>Reflexão diária:</strong> Ao final de cada dia, reflita sobre suas ações e decisões, sempre buscando melhorar.</li>
      </ul>
      
      <h3>O Paciente como Pessoa</h3>
      <p>O estoicismo nos lembra que cada paciente é uma pessoa completa, com medos, esperanças e uma história única. Quando aplicamos os princípios estoicos, naturalmente desenvolvemos uma medicina mais centrada na pessoa, mais humana e, paradoxalmente, mais eficaz.</p>
      
      <blockquote>
        "O melhor médico é aquele que consegue unir conhecimento técnico com sabedoria humana. O estoicismo oferece essa sabedoria."
      </blockquote>
      
      <h3>Conclusão</h3>
      <p>A filosofia estoica não é apenas um exercício intelectual - é uma ferramenta prática para nos tornarmos médicos melhores e pessoas mais íntegras. Quando abraçamos esses ensinamentos, descobrimos que a medicina se torna não apenas nossa profissão, mas nossa forma de contribuir para um mundo melhor.</p>
      
      <p>Como disse Marco Aurélio: "Seja como o rochedo contra o qual as ondas se quebram continuamente; ele permanece firme, e as águas furiosas ao seu redor se acalmam."</p>
    `
  },
  2: {
    id: 2,
    title: "5 Dicas Rápidas para Acelerar o Metabolismo",
    excerpt: "Estratégias práticas e baseadas em evidências para otimizar seu metabolismo no dia a dia.",
    content: "nutella",
    category: "Emagrecimento",
    readTime: "3 min",
    publishedAt: "2024-01-12",
    author: "Dr. Luiz Osório",
    tags: ["metabolismo", "emagrecimento", "dicas"],
    featured: false,
    fullContent: `
      <h2>Acelere Seu Metabolismo com Ciência</h2>
      <p>Seu metabolismo não precisa ser um mistério. Com estratégias baseadas em evidências, você pode otimizá-lo de forma natural e sustentável.</p>
      
      <h3>1. Beba Água Gelada ao Acordar</h3>
      <p><strong>Por que funciona:</strong> Seu corpo gasta energia (calorias) para aquecer a água até a temperatura corporal.</p>
      <p><strong>Como fazer:</strong> 500ml de água gelada logo ao acordar.</p>
      <p><strong>Resultado:</strong> Aumento de 10-30% no metabolismo por 30-40 minutos.</p>
      
      <h3>2. Exercícios HIIT 3x por Semana</h3>
      <p><strong>Por que funciona:</strong> O HIIT cria o "efeito afterburn" - você continua queimando calorias por horas após o treino.</p>
      <p><strong>Como fazer:</strong> 20 minutos de alta intensidade intercalada com descanso.</p>
      <p><strong>Resultado:</strong> Metabolismo elevado por até 24 horas pós-treino.</p>
      
      <h3>3. Proteína em Todas as Refeições</h3>
      <p><strong>Por que funciona:</strong> A proteína tem o maior efeito térmico dos alimentos (20-30% das calorias são gastas na digestão).</p>
      <p><strong>Como fazer:</strong> 1,6-2,2g por kg de peso corporal distribuídos ao longo do dia.</p>
      <p><strong>Resultado:</strong> Aumento de 15-30% no gasto energético pós-refeição.</p>
      
      <h3>4. Durma 7-8 Horas por Noite</h3>
      <p><strong>Por que funciona:</strong> A privação de sono desregula hormônios como leptina e grelina, diminuindo o metabolismo.</p>
      <p><strong>Como fazer:</strong> Estabeleça uma rotina de sono consistente.</p>
      <p><strong>Resultado:</strong> Metabolismo até 20% mais eficiente.</p>
      
      <h3>5. Tome Sol pela Manhã</h3>
      <p><strong>Por que funciona:</strong> A luz solar regula o ritmo circadiano, otimizando a produção hormonal.</p>
      <p><strong>Como fazer:</strong> 10-15 minutos de exposição solar entre 6h e 10h.</p>
      <p><strong>Resultado:</strong> Melhora na regulação metabólica e do sono.</p>
      
      <div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
        <h4>💡 Dica Extra</h4>
        <p>Combine todas essas estratégias para um efeito sinérgico. O metabolismo responde melhor a mudanças consistentes do que a alterações drásticas.</p>
      </div>
      
      <h3>O Que Evitar</h3>
      <ul>
        <li>Dietas muito restritivas (diminuem o metabolismo)</li>
        <li>Pular refeições regularmente</li>
        <li>Excesso de estresse crônico</li>
        <li>Sedentarismo prolongado</li>
      </ul>
      
      <p><strong>Lembre-se:</strong> Mudanças pequenas e consistentes geram resultados duradouros. Comece com uma dica por vez e vá incorporando gradualmente.</p>
    `
  }
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const postId = parseInt(params.id)
  const post = blogPosts[postId as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post não encontrado - Dr. Luiz Osório',
    }
  }

  return generateBlogMetadata({
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    slug: post.id.toString(),
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const postId = parseInt(params.id)
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post não encontrado
          </h1>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'filosofia': return Brain
      case 'medicina': return Stethoscope
      case 'emagrecimento': return Target
      case 'performance': return Heart
      case 'longevidade': return Clock
      default: return BookOpen
    }
  }

  const IconComponent = getCategoryIcon(post.category)

  const structuredData = generateArticleStructuredData({
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    author: post.author,
    category: post.category,
    tags: post.tags,
    slug: post.id.toString(),
    readTime: post.readTime,
  })

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className={`${
                post.content === "raiz" 
                  ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white" 
                  : "bg-gradient-to-r from-pink-500 to-rose-600 text-white"
              } border-0`}>
                <IconComponent className="w-3 h-3 mr-1" />
                {post.content === "raiz" ? "Conteúdo Raiz" : "Conteúdo Nutella"}
              </Badge>
              <Badge variant="outline">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 border-2 border-amber-400">
                  <AvatarImage src="/dr-luiz.jpg" alt={post.author} />
                  <AvatarFallback className="bg-gradient-to-br from-amber-400 to-orange-500 text-black font-bold">
                    DL
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 dark:prose-blockquote:bg-amber-950/20 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.fullContent }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Content */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Continue Lendo
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/blog">
                Ver todos os posts
              </Link>
            </Button>
            <Button 
              className={`${
                post.content === "raiz" 
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700" 
                  : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
              } text-white`}
              asChild
            >
              <Link href={post.content === "raiz" ? "/nutella" : "/blog"}>
                {post.content === "raiz" ? "Conteúdo Nutella" : "Conteúdo Raiz"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}