import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  Clock,
  Target,
  Brain,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Globe
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "M.E.D. - Medicina, Educação e Desenvolvimento | Dr. Luiz Osório",
  description: "Plataforma de educação médica continuada e desenvolvimento profissional. Cursos, mentorias e conteúdo científico para profissionais da saúde.",
  keywords: "educação médica, desenvolvimento profissional, cursos medicina, mentoria médica, capacitação profissional",
  openGraph: {
    title: "M.E.D. - Medicina, Educação e Desenvolvimento",
    description: "Plataforma de educação médica continuada e desenvolvimento profissional",
    type: "website",
  },
}

const organizationSchema = {
  name: "M.E.D. - Medicina, Educação e Desenvolvimento",
  description: "Plataforma de educação médica continuada e desenvolvimento profissional",
  url: "https://drluizosorio.com.br/med",
  logo: "https://drluizosorio.com.br/med-logo.jpg",
  founder: {
    "@type": "Person",
    name: "Dr. Luiz Eduardo de Moraes Vivas Osório"
  },
  sameAs: [
    "https://instagram.com/drluizosorio",
    "https://linkedin.com/in/drluizosorio"
  ]
}

export default function MEDPage() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Medicina",
      description: "Conhecimento científico atualizado e baseado em evidências para a prática clínica moderna",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: BookOpen,
      title: "Educação",
      description: "Metodologias ativas de ensino e aprendizagem para formação médica continuada",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento",
      description: "Crescimento profissional e pessoal através de mentorias e coaching especializado",
      color: "from-green-600 to-green-700"
    }
  ]

  const programs = [
    {
      title: "Residência Médica Plus",
      description: "Programa intensivo de preparação para residência médica com simulados e mentorias",
      duration: "12 meses",
      level: "Graduandos",
      features: ["Simulados semanais", "Mentoria individual", "Material exclusivo", "Aulas ao vivo"]
    },
    {
      title: "Especialização Avançada",
      description: "Cursos de especialização em nutrologia e medicina esportiva para médicos",
      duration: "6 meses",
      level: "Médicos",
      features: ["Casos clínicos", "Protocolos práticos", "Certificação", "Networking"]
    },
    {
      title: "Liderança Médica",
      description: "Desenvolvimento de habilidades de liderança e gestão para profissionais da saúde",
      duration: "3 meses",
      level: "Líderes",
      features: ["Coaching executivo", "Gestão de equipes", "Comunicação", "Inovação"]
    },
    {
      title: "Pesquisa Científica",
      description: "Metodologia de pesquisa e publicação científica para médicos pesquisadores",
      duration: "4 meses",
      level: "Pesquisadores",
      features: ["Metodologia", "Estatística", "Redação científica", "Publicação"]
    }
  ]

  const stats = [
    { number: "500+", label: "Médicos Formados" },
    { number: "50+", label: "Cursos Disponíveis" },
    { number: "95%", label: "Taxa de Aprovação" },
    { number: "4.9/5", label: "Avaliação Média" }
  ]

  const mentors = [
    {
      name: "Dr. Luiz Osório",
      specialty: "Nutrologia e Medicina Esportiva",
      experience: "15+ anos",
      description: "Especialista em nutrologia com vasta experiência em medicina esportiva e emagrecimento"
    },
    {
      name: "Dra. Ana Silva",
      specialty: "Cardiologia",
      experience: "12+ anos",
      description: "Cardiologista com expertise em prevenção cardiovascular e medicina do esporte"
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Endocrinologia",
      experience: "18+ anos",
      description: "Endocrinologista especializado em diabetes e distúrbios metabólicos"
    }
  ]

  return (
    <>
      <StructuredData type="organization" data={organizationSchema} />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
          {/* Navegação */}
          <div className="mb-8">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-200" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl mb-6 shadow-2xl">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-purple-100 to-white bg-clip-text text-transparent mb-6">
              M.E.D.
            </h1>
            
            <p className="text-2xl text-purple-200 mb-4 font-medium">
              Medicina, Educação e Desenvolvimento
            </p>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Plataforma completa de educação médica continuada e desenvolvimento profissional, 
              conectando conhecimento científico com crescimento pessoal e profissional.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-purple-900/30 text-purple-200 border-purple-700/50 px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Educação Continuada
              </Badge>
              <Badge variant="secondary" className="bg-purple-900/30 text-purple-200 border-purple-700/50 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Mentoria
              </Badge>
              <Badge variant="secondary" className="bg-purple-900/30 text-purple-200 border-purple-700/50 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certificação
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-purple-600/50 text-purple-200 hover:bg-purple-900/20 hover:border-purple-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Conhecer Cursos
              </Button>
            </div>
          </header>

          {/* Pilares */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Pilares</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-purple-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl mb-4 mx-auto shadow-lg`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center text-base leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Estatísticas */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-purple-700/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-3xl md:text-4xl font-bold text-purple-200 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm md:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Programas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Programas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-purple-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-purple-600/50 text-purple-300">
                        {program.level}
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-900/30 text-purple-200">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mentores */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Mentores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-purple-200 text-lg">{mentor.name}</CardTitle>
                    <CardDescription className="text-purple-300">
                      {mentor.specialty}
                    </CardDescription>
                    <Badge variant="outline" className="border-purple-600/50 text-purple-300 mx-auto">
                      {mentor.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center text-sm">
                      {mentor.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Metodologia */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-200 mb-4">Nossa Metodologia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  O M.E.D. utiliza metodologias ativas de aprendizagem, combinando teoria e prática através de 
                  casos clínicos reais, simulações e mentorias personalizadas para cada profissional.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Aprendizagem Ativa</h3>
                    <p className="text-gray-400 text-sm">Metodologias que colocam o aluno no centro do processo</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Foco Prático</h3>
                    <p className="text-gray-400 text-sm">Aplicação imediata do conhecimento na prática clínica</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Mentoria Individual</h3>
                    <p className="text-gray-400 text-sm">Acompanhamento personalizado com especialistas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Acesso Global</h3>
                    <p className="text-gray-400 text-sm">Plataforma online disponível 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-purple-700/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Pronto para acelerar sua carreira médica?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Junte-se ao M.E.D. e faça parte de uma comunidade de profissionais comprometidos com a excelência 
                  e o desenvolvimento contínuo na medicina.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Começar Agora
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-purple-600/50 text-purple-200 hover:bg-purple-900/20 hover:border-purple-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
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