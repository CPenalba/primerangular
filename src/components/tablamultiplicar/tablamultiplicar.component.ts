import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tablamultiplicar.component.html',
})
export class TablaMultiplicarComponent {
  @ViewChild('cajanumero') cajaNumeroRef!: ElementRef;
  public numeros: Array<number>;
  public numero!: number;

  constructor() {
    this.numeros = new Array<number>();
  }

  generarTablaMultiplicar(): void {
    this.numero = parseInt(this.cajaNumeroRef.nativeElement.value);
    var aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      let resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
  }
}
