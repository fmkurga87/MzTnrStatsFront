import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;

  constructor(private router : Router, private toastr : ToastrService) { }
  
  // TODO: Habria que agregar un servicio para loguear (ver clase 66 para router)

  ngOnInit(): void {
    
  }

  login() {
    console.log(this.model);
  }
}
