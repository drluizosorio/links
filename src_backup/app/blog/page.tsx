import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Artigos sobre Saúde e Bem-estar',
  description: 'Artigos especializados sobre medicina preventiva, nutrição, exercícios e qualidade de vida. Conteúdo educativo baseado em evidências científicas.',
  keywords: ['blog médico', 'artigos saúde', 'medicina preventiva', 'nutrição', 'bem-estar', 'qualidade de vida'],
  path: '/blog',
})

export default function BlogPage() {
  // Dados mockados dos posts - futuramente virão de um CMS ou banco de dados
  const blogPosts = [
    {
      id: 1,
      title: "Como Manter uma Alimentação Saudável no Dia a Dia",
      excerpt: "Dicas práticas para incorporar hábitos alimentares saudáveis na sua rotina, mesmo com uma agenda corrida.",
      content: "Uma alimentação equilibrada é fundamental para manter a saúde e o bem-estar. Neste artigo, vamos explorar estratégias práticas para manter uma dieta nutritiva mesmo com uma rotina agitada...",
      author: "Dr. Luiz Osório",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["nutrição", "saúde", "alimentação", "bem-estar"],
      category: "Nutrição",
      image: "/images/blog/alimentacao-saudavel.jpg",
      slug: "alimentacao-saudavel-dia-a-dia"
    },
    {
      id: 2,
      title: "A Importância do Exercício Físico na Prevenção de Doenças",
      excerpt: "Descubra como a atividade física regular pode ser sua melhor aliada na prevenção de diversas condições de saúde.",
      content: "O exercício físico regular é uma das ferramentas mais poderosas que temos para prevenir doenças e manter a qualidade de vida. Estudos científicos comprovam que...",
      author: "Dr. Luiz Osório",
      date: "2024-01-10",
      readTime: "6 min",
      tags: ["exercício", "prevenção", "saúde cardiovascular", "bem-estar"],
      category: "Exercícios",
      image: "/images/blog/exercicio-prevencao.jpg",
      slug: "exercicio-fisico-prevencao-doencas"
    },
    {
      id: 3,
      title: "Gerenciamento do Estresse: Técnicas Baseadas em Evidências",
      excerpt: "Aprenda métodos cientificamente comprovados para reduzir o estresse e melhorar sua qualidade de vida.",
      content: "O estresse crônico pode ter impactos significativos na nossa saúde física e mental. Felizmente, existem técnicas baseadas em evidências científicas que podem nos ajudar...",
      author: "Dr. Luiz Osório",
      date: "2024-01-05",
      readTime: "10 min",
      tags: ["estresse", "saúde mental", "mindfulness", "bem-estar"],
      category: "Saúde Mental",
      image: "/images/blog/gerenciamento-estresse.jpg",
      slug: "gerenciamento-estresse-tecnicas"
    },
    {
      id: 4,
      title: "Sono de Qualidade: O Pilar Esquecido da Saúde",
      excerpt: "Entenda por que o sono adequado é essencial para sua saúde e como melhorar a qualidade do seu descanso.",
      content: "O sono é frequentemente subestimado quando falamos de saúde, mas é um dos pilares fundamentais do bem-estar. Durante o sono, nosso corpo realiza processos essenciais de recuperação...",
      author: "Dr. Luiz Osório",
      date: "2023-12-28",
      readTime: "7 min",
      tags: ["sono", "descanso", "saúde", "qualidade de vida"],
      category: "Bem-estar",
      image: "/images/blog/sono-qualidade.jpg",
      slug: "sono-qualidade-pilar-saude"
    },
    {
      id: 5,
      title: "Hidratação: Mais Importante do que Você Imagina",
      excerpt: "Descubra os benefícios da hidratação adequada e como ela impacta todos os aspectos da sua saúde.",
      content: "A água é essencial para praticamente todas as funções do nosso organismo. Apesar disso, muitas pessoas não consomem a quantidade adequada de líquidos diariamente...",
      author: "Dr. Luiz Osório",
      date: "2023-12-20",
      readTime: "5 min",
      tags: ["hidratação", "água", "saúde", "metabolismo"],
      category: "Nutrição",
      image: "/images/blog/hidratacao-saude.jpg",
      slug: "hidratacao-importancia-saude"
    },
    {
      id: 6,
      title: "Check-ups Preventivos: Quando e Por Que Fazer",
      excerpt: "Saiba a importância dos exames preventivos e qual a frequência ideal para cada faixa etária.",
      content: "A medicina preventiva é uma das abordagens mais eficazes para manter a saúde em dia. Os check-ups regulares permitem identificar problemas de saúde antes que se tornem graves...",
      author: "Dr. Luiz Osório",
      date: "2023-12-15",
      readTime: "9 min",
      tags: ["prevenção", "check-up", "exames", "medicina preventiva"],
      category: "Prevenção",
      image: "/images/blog/checkup-preventivo.jpg",
      slug: "checkups-preventivos-quando-fazer"
    }
  ]

  return <BlogPageClient blogPosts={blogPosts} />
}