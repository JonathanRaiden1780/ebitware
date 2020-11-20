import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parte1Component } from './components/parte1/parte1.component';
import { FormsModule } from '@angular/forms';
import { Parte2Component } from './components/parte2/parte2.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientserviceService } from './services/clientservice.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Parte1Component,
    Parte2Component,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents:[
    Parte2Component
  ],
  providers: [ClientserviceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
