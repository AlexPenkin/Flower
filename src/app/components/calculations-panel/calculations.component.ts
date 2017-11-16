import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fertilizer } from '../../models/fertilizer';
import { FertilizerService } from '../../services/fertilizer.service';
import { Composition } from '../../models/composition';
@Component({
  selector: 'app-calculations-panel',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsPanelComponent implements OnInit {
  result: Composition = new Composition();
  keys: string[];

  constructor(private fertilizerService: FertilizerService) {}

  ngOnInit() {
    this.fertilizerService.currentList$
      .map(list => list.result)
      .subscribe(result => {
        console.log('%c there', 'background: #222; color: #bada55');
        this.result = result;
      });
    this.keys = this.fertilizerService.getAllKnownElements();
  }
}
