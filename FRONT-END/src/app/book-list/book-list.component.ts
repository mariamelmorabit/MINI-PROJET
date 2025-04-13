import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }

  deleteBook(id: number | undefined): void {
    if (id !== undefined) { 
      this.bookService.deleteBook(id).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
      });
    } else {
      console.error('Book id is undefined');
    }
  }

  editBook(book: Book): void {
    this.selectedBook = { ...book }; 
  }

  updateBook(): void {
    if (this.selectedBook && this.selectedBook.id !== undefined) {
      this.bookService.updateBook(this.selectedBook.id, this.selectedBook).subscribe(updatedBook => {
        this.books = this.books.map(book => 
          book.id === updatedBook.id ? updatedBook : book
        );
        this.selectedBook = null; 
      });
    }
  }

  cancelEdit(): void {
    this.selectedBook = null;
  }
}