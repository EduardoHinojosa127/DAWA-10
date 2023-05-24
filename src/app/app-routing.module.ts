import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibirComponent } from './recibir/recibir.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  // Otras rutas existentes...

  { path: 'recibir/:nombre/:email', component: RecibirComponent },
  { path: '', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
