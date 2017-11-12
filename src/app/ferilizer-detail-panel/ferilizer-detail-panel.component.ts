import { Component, AfterContentInit, Input } from '@angular/core';
import { FertilizerService } from '../services/fertilizer.service';
import { Fertilizer } from '../models/fertilizer';

@Component({
  selector: 'app-ferilizer-detail-panel',
  templateUrl: './ferilizer-detail-panel.component.html',
  styleUrls: ['./ferilizer-detail-panel.component.css']
})
export class FerilizerDetailPanelComponent implements AfterContentInit {
  @Input() fertilizer: Fertilizer;
  fertilizerKeys: string[];
  composition: string;

  constructor(private fertilizerService: FertilizerService) {
    this.fertilizerKeys = fertilizerService.getAllKnownElements();
   }

   onChange(e) {
     this.fertilizerService.calcCurrentList();
   }

   ngAfterContentInit() {
    this.composition = this.fertilizerKeys.reduce((acc, curr) => {
      return `${acc} \n ${curr}: ${this.fertilizer.composition[curr].weightProportion}`;
    }, 'Содержит: ');
  }

}
