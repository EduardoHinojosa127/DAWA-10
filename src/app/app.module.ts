import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { RecibirComponent } from './recibir/recibir.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosFormularioService } from './datos-formulario.service';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    RecibirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DatosFormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

