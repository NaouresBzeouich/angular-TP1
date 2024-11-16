import {Component, inject, WritableSignal , Signal } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { signal , computed } from "@angular/core";
import { FormsModule } from '@angular/forms';
import {TodoStatus} from "../model/todoStatus";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [FormsModule],
})
export class TodoComponent {

  numberOfTodos = 0;
  todo = new Todo();
  todos : WritableSignal<Todo[]> = signal<Todo[]>([]);
  status : string = '';

  // Derived Signals
  waitingTodos: Signal<Todo[]> = computed(() => this.todos().filter(todo => todo.status === 'waiting'));
  inProgressTodos: Signal<Todo[]> = computed(() => this.todos().filter(todo => todo.status === 'in progress'));
  doneTodos: Signal<Todo[]> = computed(() => this.todos().filter(todo => todo.status === 'done'));

  addTodo() {
    this.todo.id = this.numberOfTodos ;
    this.numberOfTodos ++ ;
    this.todo.status = "waiting" ;
    this.todos.update(todos => [...todos, this.todo]);
    this.todo = new Todo() ;
  }

  modifyStatus(todoId: number , newStatus: string) {
    console.log(todoId);
    let status : TodoStatus  = 'waiting' ;
    if (newStatus == "in progress") {
      status = "in progress";
    }else{
      if (newStatus == "done") {
        status = "done";
      }
    }
    console.log(status);
    this.todos.update(todos => todos.map(todo => {
      if (todo.id === todoId) {
        this.status = "";
        return { ...todo, status };
      }
      this.status = "";
      return todo;
    }));
    console.log(this.todos());
  }

  deleteTodo(todoId: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== todoId));
  }

}
