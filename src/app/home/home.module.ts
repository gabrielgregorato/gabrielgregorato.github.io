import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  AppRoutesMenuModule } from './home.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebComponent } from 'app/pages/web/web.component';
import { BancoComponent } from 'app/pages/banco/banco.component';
import { AplicativoComponent } from 'app/pages/aplicativo/aplicativo.component';
import { StaksComponent } from 'app/pages/staks/staks.component';

@NgModule({
  imports: [
    CommonModule,
    
    AppRoutesMenuModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    WebComponent,
    BancoComponent,
    AplicativoComponent,
    StaksComponent,
    
  ]
})

export class AdminLayoutModule {}
