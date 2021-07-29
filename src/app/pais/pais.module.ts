import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegiaoComponent } from './pages/por-regiao/por-regiao.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';




@NgModule({
  declarations: [

    PorCapitalComponent,
    PorRegiaoComponent,
    PorPaisComponent,
    VerPaisComponent
    
  ],
  exports: [
    
    PorCapitalComponent,
    PorRegiaoComponent,
    PorPaisComponent,
    VerPaisComponent

  ], 
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }
