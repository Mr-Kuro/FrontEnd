import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../interface/todo-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Array<TodoInterface> = [];

  constructor() {}

  ngOnInit(): void {
    let todos: TodoInterface[] = JSON.parse(`${localStorage.getItem('todos')}`);

    if (!todos) {
      this.todos = [];
      console.log(todos, this.todos);
    } else {
      this.todos = todos;
      console.log(todos, this.todos);
    }
  }

  // saveTodo(title: string, id: number, done: boolean):void{
  //   this.todos.push({
  //     id: id,
  //     title: title,
  //     done: done
  //   });

  saveTodo(todo: TodoInterface) {
    this.todos.map((item) => {
      if (todo.id === item.id) {
        item.done = true;
      }
    });

    console.log(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(title: string): void {
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false,
    });

    console.log(this.todos);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: TodoInterface) {
    console.log('O elemento pai recebeu', todo);

    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
