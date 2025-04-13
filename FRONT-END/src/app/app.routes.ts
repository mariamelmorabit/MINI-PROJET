import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },         
  { path: 'add', component: BookFormComponent }, 
  {path:'list', component:BookListComponent}  , 
  { path: 'edit/:id', component: BookFormComponent } 
];