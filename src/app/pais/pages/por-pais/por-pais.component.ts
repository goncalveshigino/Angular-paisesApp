import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Country } from '../../iterfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    lis {
       cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  haErro : boolean = false;
  paises: Country[] = [];

  
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {

    this.mostrarSugerencias = false;
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
  

  sugerencias(termino: string) {
    
    this.haErro = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 3),
        (err) => this.paisesSugeridos = []
      );
  }


  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
