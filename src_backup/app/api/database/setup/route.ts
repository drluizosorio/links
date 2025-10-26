import { NextResponse } from 'next/server';
import { testConnection, createTables } from '@/lib/database';

export async function GET() {
  try {
    console.log('🚀 Iniciando configuração do banco de dados...');
    
    // Testar conexão
    const connectionTest = await testConnection();
    if (!connectionTest.success) {
      return NextResponse.json({
        success: false,
        error: 'Falha na conexão com o banco de dados',
        details: connectionTest.error
      }, { status: 500 });
    }

    // Criar tabelas
    const tablesResult = await createTables();
    if (!tablesResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Falha ao criar tabelas',
        details: tablesResult.error
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: '✅ Banco de dados configurado com sucesso!',
      connection: connectionTest.data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Erro na configuração do banco:', error);
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor',
      details: error
    }, { status: 500 });
  }
}

export async function POST() {
  return GET(); // Permite tanto GET quanto POST
}