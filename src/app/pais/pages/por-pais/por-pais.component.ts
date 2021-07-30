import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Country } from '../../iterfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  haErro : boolean = false;
  paises : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.haErro  = false;
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
         console.log(paises);
         this.paises = paises

      }, (err) => {
        this.haErro = true;
        this.paises = [];
       })

  }

}
