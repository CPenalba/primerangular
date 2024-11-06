import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  templateUrl: './sumarnumeros.component.html',
})
export class SumarNumerosComponent {
  //declaramos variables para hacer referencia a las cajas <input/> mediante su id de angular
  @ViewChild('cajanumero1') cajaNumero1Ref!: ElementRef;
  @ViewChild('cajanumero2') cajaNumero2Ref!: ElementRef;
  public suma!: number;
  //en angular todas las propiedades deben ser instanciadas/iniciadas
  //los objetos de referencia debemos una sintaxis mediente su constructor (new) e indicar el valor por defecto que
  //desemos que tengan las cajas
  constructor() {
    //se puede poner una ! sin inicializar en el constructor
    // this.suma = 0;
    // this.cajaNumero1Ref = new ElementRef(0);
    // this.cajaNumero2Ref = new ElementRef(0);
  }

  sumarNumeros(): void {
    let num1 = this.cajaNumero1Ref.nativeElement.value;
    let num2 = this.cajaNumero2Ref.nativeElement.value;
    this.suma = parseInt(num1) + parseInt(num2);
  }
}
