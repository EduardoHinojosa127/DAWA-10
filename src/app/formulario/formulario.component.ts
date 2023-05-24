import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatosFormularioService } from '../datos-formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  constructor(private datosFormularioService: DatosFormularioService, private router: Router) {}

  onSubmit() {
    Swal.fire({
      title: '¿Estás seguro de enviar el formulario?',
      text: 'Una vez enviado, no podrás deshacer esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Almacena los datos del formulario en el servicio
        this.datosFormularioService.setFormData({
          nombre: this.nombre,
          email: this.email
        });

        // Redirige al componente RecibirComponent con los datos del formulario como parámetros
        this.router.navigate(['/recibir', this.nombre, this.email]);

        Swal.fire(
          'Enviado',
          'El formulario ha sido enviado exitosamente.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El envío del formulario ha sido cancelado.',
          'error'
        );
      }
    });
  }
}
