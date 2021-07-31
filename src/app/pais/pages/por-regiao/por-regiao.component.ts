import { Component } from '@angular/core';
import { Country } from '../../iterfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

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
  

  regioes     : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regiaoActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClassCss( regiao: string): string {
    return  (regiao === this.regiaoActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegiao(regiao: string) {
    
    if (regiao === this.regiaoActiva) { return; }

    this.regiaoActiva = regiao;
    this.paises = [];

    this.paisService.buscarRegiao(regiao)
       .subscribe( paises => this.paises = paises)
  }

}
