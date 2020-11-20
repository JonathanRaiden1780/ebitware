import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css']
})
export class Parte1Component implements OnInit {
  private Nombre: string;
  private Edad: number;
  private NSS: string;
  private Sexo: string;
  private Peso: number;
  public leyenda: string;
  private Altura: number;
  public resultado : number;
  public fp: boolean;
  public pp: boolean;
  public sp: boolean;
  public mayor : string;
  constructor() {
    this.Nombre = "";
    this.Edad = 0;
    const s = "H";
    this.Sexo = s;
    this.Peso = 0;
    this.Altura = 0;
  }

  ngOnInit() {
    this.generaNSS();
  }
  addnew() {
    var x = this.comprobarSexo(this.Sexo)
    if(x == true){
    this.imc();
    this.esMayorDeEdad();
    this.toString();
    console.log(x)
  }
}
  imc() {
    var imc = this.Peso / ((this.Altura / 100) ^ 2);
    console.log(imc)
    if (this.Sexo == 'H') {
      if (imc < 20) {
        this.resultado = -1;
        this.fp= true;
        this.pp = false;
        this.sp = false;
      }
      else if(imc >=20 && imc <= 25){
        this.resultado = 0;
        this.fp= false;
        this.pp = true;
        this.sp = false;
      }
      else{
        this.resultado = 1;
        this.fp= false;
        this.pp = false;
        this.sp = true;
      }
    }
    console.log(this.resultado)
  }

  comprobarSexo(s: string): boolean {
    if (s == 'H' || s == 'M') {
      return true
    }
    else {
      alert('Sexo no valido')
      false
    }
  }
  toString() {
    if(this.Sexo == 'H'){
      var s = 'Masculino';
    }
    else{
      s = 'Femenino';
    }
    var Alt = this.Altura/100;
    this.leyenda = this.Nombre+' con NSS:'+this.NSS+' '+ this.mayor+ ' ya que tiene '+ this.Edad+' años, sexo '+ s+' cuenta con un peso de ' + this.Peso + 'kg y una estatura de '+Alt+'m'
  }
  esMayorDeEdad() {
    if (this.Edad >= 18) {
      this.mayor = 'Es Mayor de Edad'
    }
    else {
     this.mayor = 'Es menor de Edad'
    }
  }
  generaNSS() {
    let r = ''
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersL = character.length;
    for (let i = 0; i < 8; i++) {
      r += character.charAt(Math.floor(Math.random() * charactersL));
    }
    this.NSS = r
  }
}
