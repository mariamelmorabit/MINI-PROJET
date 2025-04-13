import { Component } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookListComponent, BookFormComponent], 
  templateUrl: './app.component.html'
})
export class AppComponent {}