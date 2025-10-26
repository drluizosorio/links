import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StructuredData, drLuizPersonSchema, websiteSchema } from "@/components/structured-data"
import Link from "next/link"
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Dumbbell, 
  BookOpen, 
  Users, 
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Calendar,
  Sparkles,
  Target,
  Lightbulb,
  Clock,
  Award,
  ExternalLink,
  GraduationCap,
  Zap
} from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "Dr. Luiz Osório - Medicina e Bem-estar",
  description: "Portal oficial do Dr. Luiz Osório. Conteúdo especializado em medicina preventiva, nutrição, exercícios e bem-estar para uma vida mais saudável.",
  path: "/",
  keywords: ["medicina", "saúde", "bem-estar", "nutrição", "exercícios", "medicina preventiva", "Dr. Luiz Osório"]
})

export default function Home() {
  return (
    <>
      {/* Dados estruturados para SEO */}
      <StructuredData type="person" data={drLuizPersonSchema} />
      <StructuredData type="website" data={websiteSchema} />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
          {/* Header com Avatar e Informações Principais */}
          <header className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <Avatar className="w-32 h-32 mx-auto border-4 border-amber-500/30 shadow-2xl">
                <AvatarImage src="/dr-luiz.jpg" alt="Dr. Luiz Osório" />
                <AvatarFallback className="bg-gradient-to-br from-amber-600 to-amber-800 text-white text-2xl font-bold">
                  <Stethoscope className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-2 shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent mb-4">
              Dr. Luiz Osório
            </h1>
            
            <p className="text-xl text-amber-200 mb-4 font-medium">
              Médico Nutrólogo • Medicina Esportiva
            </p>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Medicina centrada na pessoa + evidências + filosofia
            </p>
            
            {/* Especialidades */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-amber-900/30 text-amber-200 border-amber-700/50 hover:bg-amber-800/40 transition-colors">
                <Heart className="w-3 h-3 mr-1" />
                Emagrecimento
              </Badge>
              <Badge variant="secondary" className="bg-amber-900/30 text-amber-200 border-amber-700/50 hover:bg-amber-800/40 transition-colors">
                <Dumbbell className="w-3 h-3 mr-1" />
                Hipertrofia
              </Badge>
              <Badge variant="secondary" className="bg-amber-900/30 text-amber-200 border-amber-700/50 hover:bg-amber-800/40 transition-colors">
                <Target className="w-3 h-3 mr-1" />
                Performance
              </Badge>
              <Badge variant="secondary" className="bg-amber-900/30 text-amber-200 border-amber-700/50 hover:bg-amber-800/40 transition-colors">
                <Clock className="w-3 h-3 mr-1" />
                Longevidade
              </Badge>
            </div>
          </header>

          {/* Projetos Principais */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Projetos Principais</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/gat">
                <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 mx-auto group-hover:bg-blue-600/30 transition-colors">
                      <Lightbulb className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-blue-200 text-lg">G.A.T.</CardTitle>
                    <CardDescription className="text-blue-300 text-sm">Grupo de Aperfeiçoamento Técnico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">
                      Educação médica continuada focada em nutrologia e medicina esportiva
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cais">
                <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30 hover:border-green-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4 mx-auto group-hover:bg-green-600/30 transition-colors">
                      <Heart className="w-6 h-6 text-green-400" />
                    </div>
                    <CardTitle className="text-green-200 text-lg">CAIS</CardTitle>
                    <CardDescription className="text-green-300 text-sm">Centro de Atendimento Integrado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">
                      Atendimento médico especializado em nutrologia e medicina esportiva
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/med">
                <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4 mx-auto group-hover:bg-purple-600/30 transition-colors">
                      <GraduationCap className="w-6 h-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-purple-200 text-lg">M.E.D.</CardTitle>
                    <CardDescription className="text-purple-300 text-sm">Medicina, Educação e Desenvolvimento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">
                      Plataforma de educação médica e desenvolvimento profissional
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/sai-da-bobolandia">
                <Card className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border-amber-700/30 hover:border-amber-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-lg mb-4 mx-auto group-hover:bg-amber-600/30 transition-colors">
                      <Zap className="w-6 h-6 text-amber-400" />
                    </div>
                    <CardTitle className="text-amber-200 text-lg">Sai da Bobolândia</CardTitle>
                    <CardDescription className="text-amber-300 text-sm">Transformação Real</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">
                      Programa intensivo de transformação corporal e mental
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* Links Rápidos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Acesso Rápido</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/consulta" className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Agendar Consulta
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-amber-600/50 text-amber-200 hover:bg-amber-900/20 hover:border-amber-500 py-6 text-lg font-semibold transition-all duration-300"
                asChild
              >
                <a href="/blog" className="flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Conteúdo Raiz
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-amber-600/50 text-amber-200 hover:bg-amber-900/20 hover:border-amber-500 py-6 text-lg font-semibold transition-all duration-300"
                asChild
              >
                <a href="/nutella" className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Conteúdo Nutella
                </a>
              </Button>
            </div>
          </section>

          {/* Filosofia */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50">
              <CardHeader className="text-center">
                <CardTitle className="text-amber-200 text-xl mb-4">Filosofia</CardTitle>
                <blockquote className="text-gray-300 text-lg italic leading-relaxed">
                  "A medicina não é apenas ciência, é também arte. A arte de curar não está apenas no conhecimento técnico, 
                  mas na capacidade de ver o ser humano em sua totalidade."
                </blockquote>
                <p className="text-amber-400 font-medium mt-4">— Medicina Centrada na Pessoa</p>
              </CardHeader>
            </Card>
          </section>

          {/* Redes Sociais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Conecte-se</h2>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-pink-600/50 text-pink-300 hover:bg-pink-900/20 hover:border-pink-500 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://instagram.com/drluizosorio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600/50 text-blue-300 hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://linkedin.com/in/drluizosorio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-600/50 text-red-300 hover:bg-red-900/20 hover:border-red-500 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://youtube.com/@drluizosorio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-600/50 text-amber-300 hover:bg-amber-900/20 hover:border-amber-500 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:contato@drluizosorio.com.br" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  E-mail
                </a>
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p className="mb-2">
              © 2024 Dr. Luiz Eduardo de Moraes Vivas Osório
            </p>
            <p className="text-sm">
              CRM-SP 123456 • Medicina centrada na pessoa + evidências + filosofia
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}
