import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EquiposService } from '../../../_services/equipos.service';
import { TorneosService } from '../../../_services/torneos.service';
import { ActivatedRoute } from '@angular/router';
import { EquipoCompleto } from '../../../_models/equipos/equipoCompleto';
import { TorneosResponse } from '../../../_models/torneos/torneosResponse';
import { CrearEquipoRequest } from '../../../_models/equipos/crear-equipo-request';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent implements OnInit{
// TODO: Ver el tema del login
crearEquipoRequest!: FormGroup;
crearTorneosRequest!: FormGroup;

constructor(private fb: FormBuilder, private equiposService: EquiposService, private torneosService: TorneosService, private route: ActivatedRoute) { }
  
ngOnInit(): void {
    this.crearEquipoRequest = this.fb.group({
      nombreEquipo: ['', Validators.required],
      idMz: [0, Validators.required],
      usuarioMZ: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudadId: [1, Validators.required]
    });

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

  onSubmitEquipo(): void {
    if (this.crearEquipoRequest.valid)
    {
      console.log(this.crearEquipoRequest);
      const equipo: CrearEquipoRequest = this.crearEquipoRequest.value;
      this.equiposService.postEquipo(equipo).subscribe(response => {
        console.log('Equipo agregado', response);
      })
    }
  }

  onSubmitTorneo(): void {
    if (this.crearTorneosRequest.valid)
    {
      console.log(this.crearTorneosRequest);
      // const equipo: CrearEquipoRequest = this.crearEquipoRequest.value;
      // this.equiposService.postEquipo(equipo).subscribe(response => {
      //   console.log('Equipo agregado', response);
      // })
    }
  }
}
