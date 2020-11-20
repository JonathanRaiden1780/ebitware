import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {
  registered = false;
  submitted = false;
  client_id: string;
	fechaactual:string;
  list: any;
  constructor(private servclient: ClientserviceService, public clientModel: ClienteModel, private http: HttpClient, private routes: Router)
  {
  	this.http.get('/api/v1/generate_uid').subscribe((data:any) => {
      this.client_id = data.client_id;
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }

  ngOnInit() {
  }
  
  save() {
      var nday = new Date().getDate()
      var month = new Date().getMonth();
      var año = new Date().getFullYear();
      this.fechaactual =  nday + '-' + [month+1]+ '-'+ año; 
      console.log(this.fechaactual)

    this.clientModel.Fecha_Actualizacion = this.fechaactual
      this.clientModel.Fecha_Creacion = this.fechaactual

    const data = {
      id: this.clientModel.Cliente_ID,
      User: this.clientModel.Nombre_Usuario,
      pass: this.clientModel.Contraseña,
      nombre: this.clientModel.Nombre,
      apellido: this.clientModel.Apellidos,
      correo: this.clientModel.Correo_Electronico,
      edad: this.clientModel.Edad,
      estatura: this.clientModel.Estatura,
      peso: this.clientModel.Peso,
      IMC: this.clientModel.IMC,
      geb: this.clientModel.GEB,
      eta: this.clientModel.ETA,
      fecha_new: this.clientModel.Fecha_Creacion,
      fecha_actu: this.clientModel.Fecha_Actualizacion,
    };

    this.servclient.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  new() {
    this.submitted = false;
  
  }
  getdata(){
    
  }



}
 
 