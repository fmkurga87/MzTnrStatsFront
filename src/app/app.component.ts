import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MzTnrStats SPA';
  torneos: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get('http://localhost:5117/api/Torneos/1').subscribe({
      next: response => this.torneos = response,
      error: error => console.log(error),
      complete: () => console.log('Request a GET equipos completado'),
    })
  }

  
}
