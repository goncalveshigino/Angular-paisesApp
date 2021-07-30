import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../iterfaces/pais-interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }
  

  buscarPais(termino: string): Observable<Country[]> {
      
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
   
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ termino }`
    return this.http.get<Country[]>( url );
  }


   getPaisPorID(id: string): Observable<Country> {

    const url = `${ this.apiURL }/alpha/${ id }`
    return this.http.get<Country>( url );
  }

}
