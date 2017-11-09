import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Fertilizer, IFertilizer } from '../fertilizer';
import { FertilizerService } from '../fertilizer.service';
import { IFertilizerList, FertilizerList } from '../fertilizersList';
import { Composistion } from '../composition';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css'],
  preserveWhitespaces: false

})
export class FertilizersComponent implements OnInit {
  currentFertilizers: Fertilizer[];
  fertilizer: Fertilizer;
  lists: FertilizerList[];
  currentList: FertilizerList;
  fertilizerKeys: any;
  constructor(private fertilizerService: FertilizerService) {
    this.lists = this.fertilizerService.getLists();
    this.currentFertilizers = this.lists[0].list;
    this.fertilizerKeys = Object.keys(new Composistion());
    this.currentList = this.lists[0];
  }
  ngOnInit() {
  }

  onListSelect(val) {
    this.currentList = this.lists.find((el) => el.ID === Number(val));
    this.currentFertilizers = this.currentList.get();
  }
}
