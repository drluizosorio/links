import { neon } from '@neondatabase/serverless';

// Configuração da conexão com Neon Database
const sql = neon(process.env.DATABASE_URL!);

// Interface para Blog Post
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  image?: string;
  published: boolean;
  created_at?: Date;
  updated_at?: Date;
}

// Função para testar conexão
export async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as current_time`;
    console.log('✅ Conexão com Neon Database estabelecida:', result[0]);
    return { success: true, data: result[0] };
  } catch (error) {
    console.error('❌ Erro na conexão com Neon Database:', error);
    return { success: false, error };
  }
}

// Função para criar tabelas
export async function createTables() {
  try {
    // Criar tabela de blog posts
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        author VARCHAR(100) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        read_time VARCHAR(20),
        tags TEXT[] DEFAULT '{}',
        category VARCHAR(100),
        image VARCHAR(500),
        published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Criar índices para performance
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON blog_posts(date DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category)`;

    console.log('✅ Tabelas criadas com sucesso!');
    return { success: true };
  } catch (error) {
    console.error('❌ Erro ao criar tabelas:', error);
    return { success: false, error };
  }
}

// CRUD Operations para Blog Posts
export class BlogPostService {
  // Buscar todos os posts
  static async getAllPosts(): Promise<BlogPost[]> {
    try {
      const posts = await sql`
        SELECT * FROM blog_posts 
        WHERE published = true 
        ORDER BY date DESC
      `;
      return posts as BlogPost[];
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
    }
  }

  // Buscar post por slug
  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const posts = await sql`
        SELECT * FROM blog_posts 
        WHERE slug = ${slug} AND published = true
      `;
      return posts[0] as BlogPost || null;
    } catch (error) {
      console.error('Erro ao buscar post por slug:', error);
      return null;
    }
  }

  // Buscar posts por categoria
  static async getPostsByCategory(category: string): Promise<BlogPost[]> {
    try {
      const posts = await sql`
        SELECT * FROM blog_posts 
        WHERE category = ${category} AND published = true 
        ORDER BY date DESC
      `;
      return posts as BlogPost[];
    } catch (error) {
      console.error('Erro ao buscar posts por categoria:', error);
      return [];
    }
  }

  // Buscar posts (com busca)
  static async searchPosts(query: string): Promise<BlogPost[]> {
    try {
      const posts = await sql`
        SELECT * FROM blog_posts 
        WHERE published = true 
        AND (
          title ILIKE ${`%${query}%`} OR 
          content ILIKE ${`%${query}%`} OR 
          excerpt ILIKE ${`%${query}%`} OR
          ${query} = ANY(tags)
        )
        ORDER BY date DESC
      `;
      return posts as BlogPost[];
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
    }
  }

  // Criar novo post
  static async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost | null> {
    try {
      const newPost = await sql`
        INSERT INTO blog_posts (
          title, slug, excerpt, content, author, date, read_time, 
          tags, category, image, published
        ) VALUES (
          ${post.title}, ${post.slug}, ${post.excerpt}, ${post.content},
          ${post.author}, ${post.date}, ${post.readTime}, ${post.tags},
          ${post.category}, ${post.image || null}, ${post.published}
        )
        RETURNING *
      `;
      return newPost[0] as BlogPost;
    } catch (error) {
      console.error('Erro ao criar post:', error);
      return null;
    }
  }

  // Atualizar post
  static async updatePost(id: string, post: Partial<BlogPost>): Promise<BlogPost | null> {
    try {
      const updatedPost = await sql`
        UPDATE blog_posts 
        SET 
          title = COALESCE(${post.title}, title),
          slug = COALESCE(${post.slug}, slug),
          excerpt = COALESCE(${post.excerpt}, excerpt),
          content = COALESCE(${post.content}, content),
          author = COALESCE(${post.author}, author),
          read_time = COALESCE(${post.readTime}, read_time),
          tags = COALESCE(${post.tags}, tags),
          category = COALESCE(${post.category}, category),
          image = COALESCE(${post.image}, image),
          published = COALESCE(${post.published}, published),
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *
      `;
      return updatedPost[0] as BlogPost || null;
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
      return null;
    }
  }

  // Deletar post
  static async deletePost(id: string): Promise<boolean> {
    try {
      await sql`DELETE FROM blog_posts WHERE id = ${id}`;
      return true;
    } catch (error) {
      console.error('Erro ao deletar post:', error);
      return false;
    }
  }
}

export default sql;