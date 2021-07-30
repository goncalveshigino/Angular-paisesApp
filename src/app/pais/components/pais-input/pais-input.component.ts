import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit {


  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  //Criando um Observable
  debouncer: Subject<string> = new Subject();


  termino: string = '';

  //O ngOnInit se despara uma unica vez
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        console.log('debouncer:', valor);
        this.onDebounce.emit( valor );
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPrec() {
    this.debouncer.next( this.termino );
  }

}
