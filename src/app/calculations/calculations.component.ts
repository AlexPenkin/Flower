import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fertilizer } from '../models/fertilizer';
import { FertilizerService } from '../services/fertilizer.service';
import { Composition } from '../models/composition';
@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  result: Composition = new Composition();
  keys: string[];

  constructor(private fertilizerService: FertilizerService) {
    fertilizerService.currentList$
      .map(list => list.result)
      .subscribe(result => {
        this.result = result;
      });
    this.keys = fertilizerService.getAllKnownElements();
  }

  ngOnInit() {}
}
