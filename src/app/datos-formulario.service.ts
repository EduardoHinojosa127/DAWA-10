import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosFormularioService {
  private formData: any;

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData;
  }

  clearFormData() {
    this.formData = null;
  }
}
