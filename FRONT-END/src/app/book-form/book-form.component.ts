import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  book: Book = { title: '', author: '', price: 0 };

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe(newBook => {
      console.log('Book added:', newBook);
      this.book = { title: '', author: '', price: 0 }; 
    });
  }
}