import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'hooks-angular',
  templateUrl: './hooksangular.component.html',
})
export class HooksAngular implements OnInit {
  constructor() {
    console.log('Soy ecl constructor de Hooks Angular');
  }

  ngOnInit(): void {
    console.log('Soy el metodo ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Ejecutando metodo DoCheck');
  }
}
