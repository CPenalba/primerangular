import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent {
  public numeros: Array<number>;
  public sports: Array<string>;
  constructor() {
    this.sports = [
      'canicas',
      'padel',
      'petanca',
      'curling',
      'dados',
      'futbol',
      'baloncesto',
    ];
    this.numeros = [5, 7, 8, 9, 2, 4, 5, 8, 2, 8, 2, 8, 52];
  }
}
