import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegiaoComponent } from './pages/por-regiao/por-regiao.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTabelaComponent } from './components/pais-tabela/pais-tabela.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';






@NgModule({
  declarations: [

    PorCapitalComponent,
    PorRegiaoComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTabelaComponent,
    PaisInputComponent,

    
  ],
  exports: [
    
    PorCapitalComponent,
    PorRegiaoComponent,
    PorPaisComponent,
    VerPaisComponent

  ], 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
