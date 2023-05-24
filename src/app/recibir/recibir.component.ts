import { Component, OnInit } from '@angular/core';
import { DatosFormularioService } from '../datos-formulario.service';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.component.html',
  styleUrls: ['./recibir.component.css']
})
export class RecibirComponent implements OnInit {
  formData: any;

  constructor(private datosFormularioService: DatosFormularioService) {}

  ngOnInit() {
    this.formData = this.datosFormularioService.getFormData();
    this.datosFormularioService.clearFormData();
  }
}
