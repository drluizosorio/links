import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/structured-data"
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Calendar,
  Clock,
  MapPin,
  Phone,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Star,
  Shield,
  Activity
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "CAIS - Centro de Atendimento Integrado em Saúde | Dr. Luiz Osório",
  description: "Centro médico especializado em nutrologia, medicina esportiva e emagrecimento. Atendimento humanizado e baseado em evidências científicas.",
  keywords: "centro médico, nutrologia, medicina esportiva, emagrecimento, consulta médica, saúde integrada",
  openGraph: {
    title: "CAIS - Centro de Atendimento Integrado em Saúde",
    description: "Centro médico especializado em nutrologia, medicina esportiva e emagrecimento",
    type: "website",
  },
}

const organizationSchema = {
  name: "CAIS - Centro de Atendimento Integrado em Saúde",
  description: "Centro médico especializado em nutrologia, medicina esportiva e emagrecimento",
  url: "https://drluizosorio.com.br/cais",
  logo: "https://drluizosorio.com.br/cais-logo.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR"
  },
  founder: {
    "@type": "Person",
    name: "Dr. Luiz Eduardo de Moraes Vivas Osório"
  },
  sameAs: [
    "https://instagram.com/drluizosorio",
    "https://linkedin.com/in/drluizosorio"
  ]
}

export default function CAISPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Nutrólogo",
      description: "Avaliação completa com foco em composição corporal, metabolismo e otimização nutricional",
      duration: "60 min",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Activity,
      title: "Medicina Esportiva",
      description: "Acompanhamento para atletas e praticantes de atividade física, prevenção de lesões",
      duration: "45 min", 
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Heart,
      title: "Emagrecimento Sustentável",
      description: "Programa personalizado para perda de peso saudável e manutenção a longo prazo",
      duration: "50 min",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Check-up Preventivo",
      description: "Avaliação completa de saúde com foco em prevenção e longevidade",
      duration: "90 min",
      color: "from-amber-600 to-amber-700"
    }
  ]

  const differentials = [
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Cada paciente é único. Nosso foco está na pessoa, não apenas na doença."
    },
    {
      icon: Star,
      title: "Medicina Baseada em Evidências",
      description: "Protocolos atualizados com as mais recentes pesquisas científicas."
    },
    {
      icon: Heart,
      title: "Abordagem Integrativa",
      description: "Visão holística da saúde, considerando aspectos físicos, mentais e sociais."
    },
    {
      icon: CheckCircle,
      title: "Resultados Sustentáveis",
      description: "Foco em mudanças de estilo de vida que geram resultados duradouros."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente",
      content: "O Dr. Luiz transformou minha relação com a alimentação. Perdi 15kg de forma saudável e sustentável.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Atleta",
      content: "Acompanhamento excepcional para minha performance esportiva. Resultados visíveis em pouco tempo.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Executiva",
      content: "Finalmente encontrei um médico que entende minha rotina e me ajuda de forma prática e eficiente.",
      rating: 5
    }
  ]

  return (
    <>
      <StructuredData type="organization" data={organizationSchema} />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
          {/* Navegação */}
          <div className="mb-8">
            <Button variant="ghost" className="text-green-300 hover:text-green-200" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl mb-6 shadow-2xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 via-green-100 to-white bg-clip-text text-transparent mb-6">
              CAIS
            </h1>
            
            <p className="text-2xl text-green-200 mb-4 font-medium">
              Centro de Atendimento Integrado em Saúde
            </p>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Cuidado médico especializado em nutrologia e medicina esportiva, 
              com foco no atendimento humanizado e resultados sustentáveis.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-green-900/30 text-green-200 border-green-700/50 px-4 py-2">
                <Stethoscope className="w-4 h-4 mr-2" />
                Nutrologia
              </Badge>
              <Badge variant="secondary" className="bg-green-900/30 text-green-200 border-green-700/50 px-4 py-2">
                <Activity className="w-4 h-4 mr-2" />
                Medicina Esportiva
              </Badge>
              <Badge variant="secondary" className="bg-green-900/30 text-green-200 border-green-700/50 px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Emagrecimento
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-green-600/50 text-green-200 hover:bg-green-900/20 hover:border-green-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
                asChild
              >
                <a href="tel:+5511999999999">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 99999-9999
                </a>
              </Button>
            </div>
          </header>

          {/* Serviços */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-green-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-green-600/50 text-green-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Diferenciais */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentials.map((differential, index) => (
                <Card key={index} className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30 hover:border-green-600/50 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4 mx-auto">
                      <differential.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <CardTitle className="text-green-200 text-lg">{differential.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {differential.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Depoimentos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">O que nossos pacientes dizem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-green-300">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Localização e Contato */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30">
                <CardHeader>
                  <CardTitle className="text-green-200 text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-300">
                      Rua Exemplo, 123 - Sala 456<br />
                      Bairro Médico - São Paulo/SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-300">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30">
                <CardHeader>
                  <CardTitle className="text-green-200 text-xl flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefone</h3>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-300">contato@cais.com.br</p>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-green-900/30 to-green-800/20 border-green-700/50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Pronto para transformar sua saúde?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Agende sua consulta no CAIS e descubra como podemos ajudá-lo a alcançar seus objetivos de saúde e bem-estar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-green-600/50 text-green-200 hover:bg-green-900/20 hover:border-green-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5 mr-2" />
                      WhatsApp
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