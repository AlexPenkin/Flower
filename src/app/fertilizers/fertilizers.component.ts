import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Element, N, P, K } from '../models/Elements';

import { Fertilizer, IFertilizer } from '../models/fertilizer';
import { FertilizerService } from '../services/fertilizer.service';
import { IFertilizerList, FertilizerList } from '../models/fertilizersList';
import { Composition } from '../models/composition';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css'],
  preserveWhitespaces: false
})
export class FertilizersComponent implements OnInit {
  currentList: FertilizerList;
  lists: FertilizerList[];
  litrage: number;
  fertilizerKeys: any;
  fertilizers$: Observable<Fertilizer[]>;
  constructor(private fertilizerService: FertilizerService) {
    this.fertilizers$ = this.fertilizerService.currentList$.map(
      val => val.list
    );
    this.fertilizerKeys = Object.keys(new Composition());
    this.currentList = this.fertilizerService.currentList;
    this.lists = this.fertilizerService.lists;
    this.onListSelect(this.fertilizerService.currentList.ID);
  }

  ngOnInit() {
    this.fertilizerService.currentList$.subscribe(list => {
      this.currentList = list;
    });
    const comp = new FertilizerList('666');
    comp.add(
      new Fertilizer(
        'МФК',
        '',
        new Composition({ N: new N(121), P: new P(80), K: new K(160) })
      )
    );
    this.fertilizerService.addFertilizerList(comp);
  }

  onLitrageChange() {
    this.fertilizerService.calcCurrentList();
  }

  onListSelect(id: number) {
    this.fertilizerService.setCurrentList(id);
  }
}
