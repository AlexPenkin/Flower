import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Fertilizer, IFertilizer } from '../fertilizer';
import { FertilizerService } from '../fertilizer.service';
import { IFertilizerList, FertilizerList } from '../fertilizersList';
import { Composition } from '../composition';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css'],
  preserveWhitespaces: false

})
export class FertilizersComponent implements OnInit {
  currentFertilizerList: FertilizerList;
  lists: FertilizerList[];
  fertilizerKeys: any;
  constructor(private fertilizerService: FertilizerService) {
    this.lists = this.fertilizerService.getLists();
    this.currentFertilizerList = this.fertilizerService.currentList;
    this.fertilizerKeys = Object.keys(new Composition());
  }
  ngOnInit() {
  }

  onListSelect(val) {
    this.currentFertilizerList = this.lists.find((el) => el.ID === Number(val));
  }
}
