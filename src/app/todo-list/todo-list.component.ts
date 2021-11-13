import { Component, OnInit } from '@angular/core';
import { TodoMergeService } from '../todo-merge.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todoArray = [] as any;
  arraylen = 0;
  addTodo(value: string){
    this.todoArray.push(value)
    this.arraylen += 1
  }
  deleteItem(todo: string){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
    this.arraylen -= 1
  }
  constructor(private TodoM:TodoMergeService){
  }
  ngOnInit():void{
    this.todoArray = this.TodoM.gettodo()
  }
}
