import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,

    AngularFontAwesomeModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule
  ]
})
export class UtilsModule { }
