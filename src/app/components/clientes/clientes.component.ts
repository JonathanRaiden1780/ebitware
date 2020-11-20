import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { ClienteModel } from 'src/app/models/cliente';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  list:any;
  id:string;
  constructor(
    private clientservice: ClientserviceService
    ) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.clientservice.getAll().subscribe( data => { this.list = data}, error => {console.log(error)})
  }
  search(){
    this.clientservice.findById(this.id).subscribe( data => { this.list = data}, error => {console.log(error)})
  }
  update(){
    this.clientservice.update(this.id,this.list)
  }
  

}

