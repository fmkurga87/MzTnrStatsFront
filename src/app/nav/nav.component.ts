import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;

  constructor() { }
  // TODO: Habria que agregar un servicio para loguear

  ngOnInit(): void {
    
  }

  login() {
    console.log(this.model);
  }
}
