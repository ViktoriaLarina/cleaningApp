import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListService } from '@list/services/list.service';
import { Subscription } from 'rxjs/index';
import { ItemModel } from "@utils/models/models";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnDestroy {

  comment: string;
  currentItem: ItemModel;
  subscribe: Subscription;
  isShowError: boolean;

  constructor(private service: ListService) {
    this.subscribe = this.service.currentItem.subscribe((data: ItemModel) => {
      this.currentItem = data;
      if (this.isShowError) {
        this.sendComment();
        this.isShowError = false;
      }
    });
  }

  ngOnInit() {
  }

  trySendComment(e) {
    if (e.key === 'Enter') {
      this.isShowError = false;
      if (this.currentItem && this.currentItem.id) {
        this.sendComment();
      } else {
        this.isShowError = true;
      }
    }
  }

  sendComment() {
    this.service.addComment(this.currentItem.id, this.comment);
    this.comment = '';

  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
