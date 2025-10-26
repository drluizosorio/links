import { NextRequest, NextResponse } from 'next/server';
import { BlogPostService } from '@/lib/database';

// GET - Buscar post por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Se o ID parece ser um slug, buscar por slug
    const post = id.includes('-') 
      ? await BlogPostService.getPostBySlug(id)
      : await BlogPostService.getPostBySlug(id); // Por enquanto, sempre buscar por slug

    if (!post) {
      return NextResponse.json({
        success: false,
        error: 'Post não encontrado'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: post
    });

  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// PUT - Atualizar post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();

    const updatedPost = await BlogPostService.updatePost(id, {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      readTime: body.readTime,
      tags: body.tags,
      category: body.category,
      image: body.image,
      published: body.published
    });

    if (!updatedPost) {
      return NextResponse.json({
        success: false,
        error: 'Post não encontrado ou erro ao atualizar'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: updatedPost,
      message: 'Post atualizado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao atualizar post:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// DELETE - Deletar post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const success = await BlogPostService.deletePost(id);

    if (!success) {
      return NextResponse.json({
        success: false,
        error: 'Post não encontrado ou erro ao deletar'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Post deletado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao deletar post:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}