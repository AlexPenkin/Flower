import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Fertilizer, IFertilizer } from '../fertilizer';
import { FertilizerService } from '../fertilizer.service';
import { IFertilizerList, FertilizerList } from '../fertilizersList';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css'],

})
export class FertilizersComponent implements OnInit {
  fertilizers: FertilizerList = new FertilizerList('Default');
  fertilizerKeys: string[];
  constructor(private fertilizerService: FertilizerService) {
    this.fertilizers.add(this.fertilizerService.get());
    console.log(this.fertilizers)
    console.log(this.fertilizers.calc())
    this.fertilizerKeys = this.fertilizerService.getFertilizerKeys();
  }
  ngOnInit() {
  }

}
