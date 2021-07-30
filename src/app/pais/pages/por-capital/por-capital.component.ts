import { Component, OnInit } from '@angular/core';
import { Country } from '../../iterfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  haErro : boolean = false;
  paises : Country[] = [];


  constructor( private paisService: PaisService) { }

  buscar( termino: string ) {
    
    this.haErro = false;
    this.termino = termino;


    this.paisService.buscarCapital(this.termino)
      .subscribe((capital) => {
        
        this.paises = capital;

      }, (err) => {
        this.haErro = true;
        this.paises = [];
      });
    
  }


  

}
