import { NextRequest, NextResponse } from 'next/server';
import { BlogPostService, BlogPost } from '@/lib/database';

// GET - Buscar todos os posts ou buscar por query
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const category = searchParams.get('category');

    let posts: BlogPost[];

    if (query) {
      posts = await BlogPostService.searchPosts(query);
    } else if (category) {
      posts = await BlogPostService.getPostsByCategory(category);
    } else {
      posts = await BlogPostService.getAllPosts();
    }

    return NextResponse.json({
      success: true,
      data: posts,
      count: posts.length
    });

  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// POST - Criar novo post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validação básica
    if (!body.title || !body.content) {
      return NextResponse.json({
        success: false,
        error: 'Título e conteúdo são obrigatórios'
      }, { status: 400 });
    }

    // Criar slug se não fornecido
    if (!body.slug) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    const newPost = await BlogPostService.createPost({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || '',
      content: body.content,
      author: body.author || 'Dr. Luiz Osório',
      date: body.date || new Date().toISOString(),
      readTime: body.readTime || '5 min',
      tags: body.tags || [],
      category: body.category || 'Geral',
      image: body.image || null,
      published: body.published !== undefined ? body.published : true
    });

    if (!newPost) {
      return NextResponse.json({
        success: false,
        error: 'Erro ao criar post'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: newPost,
      message: 'Post criado com sucesso!'
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar post:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}