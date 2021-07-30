import { Component, Input } from '@angular/core';
import { Country } from '../../iterfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabela',
  templateUrl: './pais-tabela.component.html',
  styles: [
  ]
})
export class PaisTabelaComponent  {

  @Input() paises : Country[] = [];

  constructor( private  paisService: PaisService) { }



}
