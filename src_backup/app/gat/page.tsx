import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { 
  Lightbulb, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  Clock,
  Target,
  Brain,
  ArrowLeft,
  ExternalLink,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "G.A.T. - Grupo de Aperfeiçoamento Técnico | Dr. Luiz Osório",
  description: "Educação médica continuada focada em nutrologia e medicina esportiva. Programa de aperfeiçoamento técnico para profissionais da saúde.",
  keywords: "educação médica, nutrologia, medicina esportiva, aperfeiçoamento técnico, capacitação médica",
  openGraph: {
    title: "G.A.T. - Grupo de Aperfeiçoamento Técnico",
    description: "Educação médica continuada focada em nutrologia e medicina esportiva",
    type: "website",
  },
}

const organizationSchema = {
  name: "G.A.T. - Grupo de Aperfeiçoamento Técnico",
  description: "Programa de educação médica continuada focado em nutrologia e medicina esportiva",
  url: "https://drluizosorio.com.br/gat",
  logo: "https://drluizosorio.com.br/gat-logo.jpg",
  founder: {
    "@type": "Person",
    name: "Dr. Luiz Eduardo de Moraes Vivas Osório"
  },
  sameAs: [
    "https://instagram.com/drluizosorio",
    "https://linkedin.com/in/drluizosorio"
  ]
}

export default function GATPage() {
  const benefits = [
    {
      icon: Brain,
      title: "Conhecimento Atualizado",
      description: "Conteúdo baseado nas mais recentes evidências científicas em nutrologia e medicina esportiva"
    },
    {
      icon: Users,
      title: "Networking Qualificado",
      description: "Conecte-se com profissionais de excelência e construa uma rede de contatos sólida"
    },
    {
      icon: Target,
      title: "Aplicação Prática",
      description: "Metodologias que você pode implementar imediatamente na sua prática clínica"
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Certificados reconhecidos para sua educação médica continuada"
    }
  ]

  const modules = [
    {
      title: "Fundamentos da Nutrologia",
      duration: "8 semanas",
      topics: ["Metabolismo energético", "Micronutrientes", "Suplementação baseada em evidências"]
    },
    {
      title: "Medicina Esportiva Aplicada",
      duration: "6 semanas", 
      topics: ["Fisiologia do exercício", "Prevenção de lesões", "Otimização de performance"]
    },
    {
      title: "Emagrecimento Sustentável",
      duration: "4 semanas",
      topics: ["Estratégias nutricionais", "Comportamento alimentar", "Acompanhamento longitudinal"]
    },
    {
      title: "Hipertrofia e Composição Corporal",
      duration: "4 semanas",
      topics: ["Síntese proteica", "Periodização nutricional", "Avaliação corporal"]
    }
  ]

  return (
    <>
      <StructuredData type="organization" data={organizationSchema} />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
          {/* Navegação */}
          <div className="mb-8">
            <Button variant="ghost" className="text-blue-300 hover:text-blue-200" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-2xl">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent mb-6">
              G.A.T.
            </h1>
            
            <p className="text-2xl text-blue-200 mb-4 font-medium">
              Grupo de Aperfeiçoamento Técnico
            </p>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Educação médica continuada de excelência, focada em nutrologia e medicina esportiva, 
              com metodologia baseada em evidências e aplicação prática.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-700/50 px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Educação Continuada
              </Badge>
              <Badge variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-700/50 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Networking Médico
              </Badge>
              <Badge variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-700/50 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certificação
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Inscreva-se Agora
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-blue-600/50 text-blue-200 hover:bg-blue-900/20 hover:border-blue-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Saiba Mais
              </Button>
            </div>
          </header>

          {/* Benefícios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Por que escolher o G.A.T.?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 mx-auto">
                      <benefit.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-blue-200 text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Módulos do Programa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Módulos do Programa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                      <Badge variant="outline" className="border-blue-600/50 text-blue-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {module.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Metodologia */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-200 mb-4">Nossa Metodologia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  O G.A.T. combina teoria sólida com prática clínica, utilizando casos reais e metodologias ativas de aprendizagem. 
                  Nosso foco está na medicina baseada em evidências, sempre com aplicação prática imediata.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Teoria Fundamentada</h3>
                    <p className="text-gray-400 text-sm">Base científica sólida com as mais recentes evidências</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Aplicação Prática</h3>
                    <p className="text-gray-400 text-sm">Casos clínicos reais e protocolos aplicáveis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Discussão Colaborativa</h3>
                    <p className="text-gray-400 text-sm">Troca de experiências entre profissionais</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-blue-700/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Pronto para elevar sua prática médica?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Junte-se ao G.A.T. e faça parte de uma comunidade de profissionais comprometidos com a excelência em nutrologia e medicina esportiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Inscreva-se Agora
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-blue-600/50 text-blue-200 hover:bg-blue-900/20 hover:border-blue-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:contato@drluizosorio.com.br">
                      Fale Conosco
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}