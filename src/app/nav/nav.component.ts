import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;

  constructor(private router : Router) { }
  
  // TODO: Habria que agregar un servicio para loguear (ver clase 66 para router)

  ngOnInit(): void {
    
  }

  login() {
    console.log(this.model);
  }
}
