import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '@nx-learning/data';

@Component({
  selector: 'nx-learning-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
