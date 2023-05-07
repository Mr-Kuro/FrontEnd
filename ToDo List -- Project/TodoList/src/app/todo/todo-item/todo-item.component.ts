import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from 'src/app/interface/todo-interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoInterface = {
    id: 0,
    title:'',
    done: false
  };

  @Output() remove = new EventEmitter
  @Output() save = new EventEmitter

  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  markAsDone():void{
    debugger;
    this.done = true

    this.save.emit(this.todo  )
    console.log(this.todo)

  }

  removeTodo():void{
    this.remove.emit(this.todo  )

    console.log(this.todo)
  }
}
