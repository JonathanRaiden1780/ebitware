import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { Parte1Component } from './components/parte1/parte1.component';
import { Parte2Component } from './components/parte2/parte2.component';

const routes: Routes = [
  { path: '', redirectTo: 'Parte1', pathMatch: 'full' },
  { path: 'Parte1', component: Parte1Component },
  { path: 'Parte2', component: Parte2Component },
  { path: 'clientes/:id', component: ClientesComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


