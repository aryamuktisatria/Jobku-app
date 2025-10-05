import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection configuration
const getDbConfig = () => {
  return {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'jobku_db',
    port: 3306,
  };
};

// GET all testimonials
export async function GET() {
  let connection;
  try {
    console.log('Connecting to database with config:', {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME
    });

    connection = await mysql.createConnection(getDbConfig());
    console.log('Database connected successfully');

    const [rows] = await connection.execute(
      'SELECT id, name, comment, rating, created_at FROM testimonials WHERE is_approved = TRUE ORDER BY created_at DESC'
    );
    
    console.log('Fetched testimonials:', rows);
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Database connection failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// POST new testimonial
export async function POST(request: NextRequest) {
  let connection;
  try {
    const { name, comment, rating } = await request.json();
    
    console.log('Received testimonial data:', { name, comment, rating });
    
    // Validation
    if (!name || !comment || !rating) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }
    
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating harus antara 1-5' },
        { status: 400 }
      );
    }
    
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Nama harus antara 2-100 karakter' },
        { status: 400 }
      );
    }
    
    if (comment.length < 10 || comment.length > 500) {
      return NextResponse.json(
        { error: 'Komentar harus antara 10-500 karakter' },
        { status: 400 }
      );
    }
    
    connection = await mysql.createConnection(getDbConfig());
    
    const [result] = await connection.execute(
      'INSERT INTO testimonials (name, comment, rating, is_approved) VALUES (?, ?, ?, TRUE)',
      [name.trim(), comment.trim(), rating]
    );
    
    console.log('Testimonial inserted successfully:', result);
    
    return NextResponse.json(
      { 
        message: 'Testimonial berhasil dikirim!',
        success: true 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error inserting testimonial:', error);
    return NextResponse.json(
      { 
        error: 'Gagal mengirim testimonial',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}