import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { 
  Zap, 
  Users, 
  Target, 
  Award,
  Calendar,
  Clock,
  TrendingUp,
  Brain,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Heart,
  Shield,
  Flame
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sai da Bobolândia - Transformação Real | Dr. Luiz Osório",
  description: "Programa intensivo de transformação corporal e mental. Saia da zona de conforto e alcance resultados extraordinários com método científico.",
  keywords: "transformação corporal, emagrecimento, mudança de hábitos, zona de conforto, resultados reais, método científico",
  openGraph: {
    title: "Sai da Bobolândia - Transformação Real",
    description: "Programa intensivo de transformação corporal e mental",
    type: "website",
  },
}

const organizationSchema = {
  name: "Sai da Bobolândia",
  description: "Programa intensivo de transformação corporal e mental",
  url: "https://drluizosorio.com.br/sai-da-bobolandia",
  logo: "https://drluizosorio.com.br/sai-da-bobolandia-logo.jpg",
  founder: {
    "@type": "Person",
    name: "Dr. Luiz Eduardo de Moraes Vivas Osório"
  },
  sameAs: [
    "https://instagram.com/drluizosorio",
    "https://linkedin.com/in/drluizosorio"
  ]
}

export default function SaiDaBobolandiaPage() {
  const principles = [
    {
      icon: Zap,
      title: "Ação Imediata",
      description: "Pare de procrastinar. O momento de agir é AGORA. Sem desculpas, sem 'segunda-feira que vem'.",
      color: "from-red-600 to-red-700"
    },
    {
      icon: Target,
      title: "Foco Total",
      description: "Defina seus objetivos com clareza e vá atrás deles com determinação inabalável.",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Brain,
      title: "Mentalidade Vencedora",
      description: "Transforme sua mente primeiro. O corpo segue onde a mente lidera.",
      color: "from-yellow-600 to-yellow-700"
    },
    {
      icon: Flame,
      title: "Intensidade Máxima",
      description: "Resultados extraordinários exigem esforços extraordinários. Sem meio termo.",
      color: "from-red-600 to-orange-600"
    }
  ]

  const phases = [
    {
      phase: "Fase 1",
      title: "Despertar",
      duration: "Semanas 1-2",
      description: "Quebra de padrões limitantes e criação de novos hábitos fundamentais",
      goals: ["Definir objetivos claros", "Eliminar sabotadores", "Criar rotina matinal", "Mindset de vencedor"]
    },
    {
      phase: "Fase 2", 
      title: "Aceleração",
      duration: "Semanas 3-6",
      description: "Intensificação do processo com protocolos avançados de nutrição e treino",
      goals: ["Protocolo nutricional", "Treino intensivo", "Suplementação", "Monitoramento diário"]
    },
    {
      phase: "Fase 3",
      title: "Transformação",
      duration: "Semanas 7-10",
      description: "Refinamento e otimização para resultados máximos e duradouros",
      goals: ["Ajustes finos", "Resultados visíveis", "Novos hábitos", "Mentalidade sólida"]
    },
    {
      phase: "Fase 4",
      title: "Manutenção",
      duration: "Semanas 11-12",
      description: "Consolidação dos resultados e estratégias para manutenção a longo prazo",
      goals: ["Estilo de vida", "Autonomia total", "Resultados mantidos", "Nova identidade"]
    }
  ]

  const testimonials = [
    {
      name: "Carlos M.",
      result: "-18kg em 3 meses",
      before: "Sedentário, 95kg",
      after: "Ativo, 77kg, definido",
      quote: "Pensei que era impossível. O Dr. Luiz me mostrou que eu estava vivendo na Bobolândia mesmo."
    },
    {
      name: "Ana P.",
      result: "-12kg + ganho muscular",
      before: "Sem energia, 78kg",
      after: "Forte, 66kg, confiante",
      quote: "Não foi só o corpo que mudou. Minha mente, minha vida, tudo mudou. Saí da zona de conforto de vez."
    },
    {
      name: "Roberto S.",
      result: "-25kg em 4 meses",
      before: "Obeso, sem esperança",
      after: "Atlético, cheio de energia",
      quote: "Estava há anos enganando a mim mesmo. O programa me acordou para a realidade e me deu as ferramentas."
    }
  ]

  const warnings = [
    "Este programa NÃO é para quem quer resultados fáceis",
    "NÃO é para quem busca fórmulas mágicas",
    "NÃO é para quem não está disposto a sair da zona de conforto",
    "É APENAS para quem quer transformação REAL e duradoura"
  ]

  const includes = [
    "Protocolo nutricional personalizado",
    "Plano de treino intensivo",
    "Suplementação estratégica",
    "Acompanhamento semanal",
    "Grupo VIP no WhatsApp",
    "Material exclusivo de mindset",
    "Acesso ao app de monitoramento",
    "Garantia de 30 dias"
  ]

  return (
    <>
      <StructuredData type="organization" data={organizationSchema} />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
          {/* Navegação */}
          <div className="mb-8">
            <Button variant="ghost" className="text-red-300 hover:text-red-200" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl mb-6 shadow-2xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent mb-6">
              SAI DA BOBOLÂNDIA
            </h1>
            
            <p className="text-2xl text-red-200 mb-4 font-bold">
              PARE DE SE ENGANAR. HORA DA TRANSFORMAÇÃO REAL.
            </p>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Chega de desculpas, de "começar na segunda", de resultados pela metade. 
              Este é o programa para quem quer sair da zona de conforto e alcançar resultados REAIS.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-red-900/30 text-red-200 border-red-700/50 px-4 py-2 font-bold">
                <Flame className="w-4 h-4 mr-2" />
                INTENSIVO
              </Badge>
              <Badge variant="secondary" className="bg-orange-900/30 text-orange-200 border-orange-700/50 px-4 py-2 font-bold">
                <Target className="w-4 h-4 mr-2" />
                RESULTADOS REAIS
              </Badge>
              <Badge variant="secondary" className="bg-yellow-900/30 text-yellow-200 border-yellow-700/50 px-4 py-2 font-bold">
                <Zap className="w-4 h-4 mr-2" />
                SEM ENROLAÇÃO
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
              >
                <Flame className="w-5 h-5 mr-2" />
                QUERO SAIR DA BOBOLÂNDIA
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-red-600/50 text-red-200 hover:bg-red-900/20 hover:border-red-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Transformações
              </Button>
            </div>
          </header>

          {/* Aviso Importante */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border-red-600/50 border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-200 mb-4 flex items-center justify-center gap-2">
                  <Shield className="w-6 h-6" />
                  AVISO IMPORTANTE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {warnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3 text-red-100 font-semibold">
                      <ExternalLink className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      {warning}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Princípios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">OS 4 PILARES DA TRANSFORMAÇÃO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl mb-4 mx-auto shadow-lg`}>
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-red-200 text-lg font-bold">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center font-medium">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Fases do Programa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AS 4 FASES DA TRANSFORMAÇÃO</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {phases.map((phase, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-orange-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-orange-600/50 text-orange-300 font-bold">
                        {phase.phase}
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-900/30 text-orange-200">
                        <Clock className="w-3 h-3 mr-1" />
                        {phase.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl font-bold">{phase.title}</CardTitle>
                    <CardDescription className="text-gray-300 font-medium">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Transformações Reais */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">TRANSFORMAÇÕES REAIS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30 hover:border-green-600/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-green-200 text-lg font-bold">{testimonial.name}</CardTitle>
                    <Badge className="bg-green-600 text-white font-bold mx-auto">
                      {testimonial.result}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="text-sm">
                      <div className="text-red-300 font-semibold">ANTES: {testimonial.before}</div>
                      <div className="text-green-300 font-semibold">DEPOIS: {testimonial.after}</div>
                    </div>
                    <p className="text-gray-300 italic font-medium">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* O que está incluído */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">O QUE VOCÊ RECEBE</h2>
            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-yellow-700/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-yellow-100 font-semibold">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Garantia */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-blue-700/50">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-200 mb-4">GARANTIA INCONDICIONAL</h3>
                <p className="text-gray-300 text-lg mb-4">
                  Se em 30 dias você não estiver 100% satisfeito com os resultados, 
                  devolvemos todo o seu investimento. SEM PERGUNTAS.
                </p>
                <p className="text-blue-300 font-bold">
                  Porque temos CERTEZA de que funciona.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action Final */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-red-900/40 to-orange-900/30 border-red-600/50 border-2">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  CHEGA DE BOBOLÂNDIA!
                </h2>
                <p className="text-gray-300 text-xl mb-6 font-bold">
                  Você tem duas opções:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-700/50">
                    <h3 className="text-red-300 font-bold text-lg mb-3">❌ CONTINUAR NA BOBOLÂNDIA</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Mesmas desculpas de sempre</li>
                      <li>• Resultados pela metade</li>
                      <li>• Frustração constante</li>
                      <li>• Tempo perdido</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 p-6 rounded-lg border border-green-700/50">
                    <h3 className="text-green-300 font-bold text-lg mb-3">✅ TRANSFORMAÇÃO REAL</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Resultados comprovados</li>
                      <li>• Mudança definitiva</li>
                      <li>• Confiança renovada</li>
                      <li>• Nova identidade</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-red-400 mb-2">R$ 497</div>
                  <div className="text-gray-400 line-through text-xl mb-2">De R$ 997</div>
                  <div className="text-yellow-300 font-bold text-lg">
                    ⚡ OFERTA LIMITADA - APENAS HOJE ⚡
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse mb-4"
                >
                  <Flame className="w-6 h-6 mr-3" />
                  QUERO SAIR DA BOBOLÂNDIA AGORA
                </Button>
                
                <p className="text-gray-400 text-sm">
                  🔒 Pagamento 100% seguro | ⚡ Acesso imediato | 🛡️ Garantia de 30 dias
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}