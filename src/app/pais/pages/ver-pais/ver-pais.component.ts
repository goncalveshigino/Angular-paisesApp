import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// O SwitchMap receber um observable e retornar outro
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../iterfaces/pais-interface';

import { PaisService } from '../../services/pais.service'; 

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor(

    private activatedRoute: ActivatedRoute,
    private paisService: PaisService

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorID(id)),
        tap( console.log)
      )
      .subscribe( pais => this.pais = pais);
      
      // .subscribe(({ id }) => {

      //   console.log(id);

      //    this.paisService.getPaisPorID( id )
      //      .subscribe(pais => {
      //         console.log( pais );
      //       })
      // });
    
    
  }

}
