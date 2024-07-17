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
// TODO: Ver si van estos modelos
crearEquipoRequest! : FormGroup;
torneos : TorneosResponse | undefined;

constructor(private fb: FormBuilder, private equiposService: EquiposService, private torneosService: TorneosService, private route: ActivatedRoute) { }
  
ngOnInit(): void {
    this.crearEquipoRequest = this.fb.group({
      nombreEquipo: ['', Validators.required],
      idMz: [0, Validators.required],
      usuarioMZ: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudadId: [0, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.crearEquipoRequest.valid)
    {
      console.log(this.crearEquipoRequest);
    }
    // if (this.crearEquipoRequest.valid) {
    //   const equipo: Equipo = this.equipoForm.value;
    //   this.equiposService.addEquipo(equipo).subscribe(response => {
    //     console.log('Equipo agregado', response);
    //   });
    // }
  }
}
