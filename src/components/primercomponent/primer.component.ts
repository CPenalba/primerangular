import { Component } from '@angular/core';

//un component tendra una delaracion de su contenido
@Component({
  //debemos declarar el nombre del component en angular, se suelen llamar mediante guion
  selector: 'primer-component',
  //como no vamos a tener html (vista) como template vamos a escribir directamsnte el codigo html aqui
  template: `
    <h1>Soy el primer component de Angular!!!</h1>
    <h2 style="color:blue">{{ titulo }}, {{ descripcion }}, {{ anyo }}</h2>
  `,
})

//todo componnet debe ser declarado como una clase
//dicho nombre de clase se utilizara dentro de app.module.ts
export class PrimerComponent {
  //aqui declararemos las variables que deseemos
  //dichas variables son con tipado
  public titulo: string;
  public descripcion: string;
  public anyo: number;
  //en angular tenemos un constructor para iniciar las variables o recuperarlas de algun sitio
  constructor() {
    //aqui para acceder a las propiedades de una clase se utiliza la palabra this
    this.titulo = 'Hoy es miercoles';
    this.descripcion = 'Hoy no llueve';
    this.anyo = 2024;
  }
}
