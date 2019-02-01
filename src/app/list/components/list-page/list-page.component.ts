import { Component, OnInit } from '@angular/core';

import { ItemData } from '@utils/models/models';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  data: ItemData[];

  constructor(private service: ListService) {
  }

  ngOnInit() {
    this.service.data.subscribe((data: ItemData[]) => this.data = data);
  }

}
