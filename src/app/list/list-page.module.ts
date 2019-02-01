import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsModule } from '@utils/utils.module';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ListComponent } from './components/list/list.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    ListPageComponent,
    ListComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    ListPageComponent
  ]
})
export class ListPageModule { }
