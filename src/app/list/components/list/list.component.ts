import { Component, Input, OnInit } from '@angular/core';
import { ItemData, ItemModel } from '@utils/models/models';
import { ListService } from '@list/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

@Input()data: ItemData;

  currentIndex: number;

  constructor(private service: ListService) { }

  ngOnInit() {

  }

  removeItem(id: number) {
    this.service.removeItem(id);
  }

  setCurrentItem(item: ItemModel) {
    this.currentIndex = item.id;
    this.service.setCurrentItem(item);
  }

}
