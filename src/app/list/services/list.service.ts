import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { ItemData, ItemModel } from '@utils/models/models';
import { StubData } from '@utils/stubData/stubData';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  data = new BehaviorSubject<ItemData[]>(StubData.Data);
  currentItem = new BehaviorSubject<ItemModel>(null);

  constructor() {
  }

  removeItem(id: number) {
    this.data.subscribe((data: ItemData[]) => {
      for (let i = 0; i < data.length; i++) {
        const currentItemId = data[i].data.findIndex((item: ItemModel) => item.id === id);
        if (currentItemId > -1) {
          data[i].data.splice(currentItemId, 1);

          this.currentItem.subscribe((item: ItemModel) => {
            if (item.id === id) {
              this.currentItem.next(null);
            }
          });
        }
      }
    });
  }

  setCurrentItem(item: ItemModel) {
    this.currentItem.next(item);
  }

  addComment(id: number, comment: string) {
    this.data.subscribe((data: ItemData[]) => {
      for (let i = 0; i < data.length; i++) {
        const currentItemId = data[i].data.findIndex((item: ItemModel) => item.id === id);
        if (currentItemId > -1) {
          data[i].data[currentItemId].comments.push(comment);
        }
      }
    });

  }

}
