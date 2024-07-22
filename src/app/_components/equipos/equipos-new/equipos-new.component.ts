import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquiposService } from '../../../_services/equipos.service';
import { DateAdapter } from '@angular/material/core';
import { CrearEquipoRequest } from '../../../_models/equipos/crear-equipo-request';

@Component({
  selector: 'app-equipos-new',
  templateUrl: './equipos-new.component.html',
  styleUrl: './equipos-new.component.css'
})
export class EquiposNewComponent implements OnInit{
  crearEquipoRequest!: FormGroup;

  constructor (private fb: FormBuilder, private equiposService: EquiposService, private dateAdapter: DateAdapter<Date>) {}

  
  ngOnInit(): void {
    // En https://www.youtube.com/watch?v=KSN9GqhFqPs explican validaciones 

    this.crearEquipoRequest = this.fb.group({
      nombreEquipo: ['', Validators.required],
      idMz: [0, Validators.required],
      usuarioMZ: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudadId: [1, Validators.required]
    });
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

}
