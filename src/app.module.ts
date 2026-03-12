import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule } from '@nestjs/config'; // Per gestionar variables d'entorn
import { BooksModule } from './books/books.module'; // El crearem en el pas 3

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Fent que les variables d'entorn estiguin disponibles globalment
    }),
    //si no existeix crea la base de dades book-api i la col·lecció books
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/book-api'),
    BooksModule, // Importa el mòdul de llibres
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}