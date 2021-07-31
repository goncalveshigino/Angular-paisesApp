import { Component } from '@angular/core';

@Component({
  selector: 'app-por-regiao',
  templateUrl: './por-regiao.component.html',
  styles: [
   ` button {
      margin-right: 5px;
    }`
  ]
})
export class PorRegiaoComponent  {
  

  regioes     : string[] = ['africa', 'america', 'asia', 'auropa', 'oceania'];
  regiaoActiva: string = '';

  constructor() { }

  activarRegiao( regiao: string) {
    this.regiaoActiva = regiao;

    
  }

}
