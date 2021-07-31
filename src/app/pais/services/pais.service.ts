import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';
import { Country } from '../iterfaces/pais-interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
  return new HttpParams() .set('fields', 'name;capital;alpha2code;flag;population');
  }

  constructor(private http: HttpClient) { }
  

  buscarPais(termino: string): Observable<Country[]> {
      
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
   
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ termino }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }


  getPaisPorID(id: string): Observable<Country> {

    const url = `${ this.apiURL }/alpha/${ id }`
    return this.http.get<Country>( url, { params: this.httpParams });
  }
  

  buscarRegiao(regiao: string): Observable<Country[]> {


    const url = `${this.apiURL}/region/${regiao}`;
    return this.http.get<Country[]>(url, { params:  this.httpParams } )
      .pipe(
      tap( console.log )
    )
  }


}
