import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-learning-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(authenticate:any) {
    console.log(authenticate);
  }
}
