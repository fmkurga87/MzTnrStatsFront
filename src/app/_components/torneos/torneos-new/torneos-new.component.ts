import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { TorneosService } from '../../../_services/torneos.service';
import { DateAdapter } from '@angular/material/core';
import { CrearTorneoRequest } from '../../../_models/torneos/crearTorneoRequest';

@Component({
  selector: 'app-torneos-new',
  templateUrl: './torneos-new.component.html',
  styleUrl: './torneos-new.component.css'
})
export class TorneosNewComponent implements OnInit{
  crearTorneosRequest!: FormGroup;
  faCalendar = faCalendar;

  constructor(private fb: FormBuilder, private torneosService: TorneosService, private dateAdapter: DateAdapter<Date>) 
  { 
    this.dateAdapter.setLocale('es-AR');
  }
  
  ngOnInit(): void {
    // En https://www.youtube.com/watch?v=KSN9GqhFqPs explican validaciones 

    this.crearTorneosRequest = this.fb.group({
      idMz: [0, Validators.required],
      nombre: ['', Validators.required],
      edicion: [0, Validators.required],
      temporadaMZ: [0, Validators.required],
      fechaInicio: [Date.now, Validators.required],
      fechaFin: [Date.now, Validators.required],
      link: ['', Validators.required],
      idCampeon: [0, Validators.required],
      urlImagen: ['', Validators.required],
      tipo: [1, Validators.required] 
     })
  }

  onSubmitTorneo(): void {
    if (this.crearTorneosRequest.valid)
    {
      console.log(this.crearTorneosRequest);
      const torneo: CrearTorneoRequest = this.crearTorneosRequest.value;
      this.torneosService.postTorneo(torneo).subscribe(response => {
         console.log('Torneo agregado', response);
       })
    }
  }

}
