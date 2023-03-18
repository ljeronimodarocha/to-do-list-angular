import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { ToDoInputAddItensComponent } from './components/to-do-input-add-itens/to-do-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    ToDoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
    
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class HomeModule { }
