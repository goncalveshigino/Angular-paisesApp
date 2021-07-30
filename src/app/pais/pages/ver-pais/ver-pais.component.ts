import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// O SwitchMap receber um observable e retornar outro
import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service'; 

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(

    private activatedRoute: ActivatedRoute,
    private paisService: PaisService

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorID( id ) )
      )
      .subscribe(resp => {
        console.log(resp);
      });
      
      // .subscribe(({ id }) => {

      //   console.log(id);

      //    this.paisService.getPaisPorID( id )
      //      .subscribe(pais => {
      //         console.log( pais );
      //       })
      // });
    
    
  }

}
