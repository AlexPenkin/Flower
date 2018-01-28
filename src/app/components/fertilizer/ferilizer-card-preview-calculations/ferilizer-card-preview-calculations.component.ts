import { Component, AfterContentInit, Input } from '@angular/core';
import { FertilizerService } from '../../../services/fertilizer.service';
import { CalcluationService } from '../../../services/calcluation.service';
import { Fertilizer } from '../../../models/fertilizer';

@Component({
    selector: 'app-ferilizer-card-preview-calculations',
    templateUrl: './ferilizer-card-preview-calculations.component.html',
    styleUrls: ['./ferilizer-card-preview-calculations.component.css']
})
export class FerilizerCardPreviewCalculationsComponent implements AfterContentInit {
    @Input() fertilizer: Fertilizer;
    fertilizerKeys: string[];
    composition: string;
    list: any;

    constructor(
        private fertilizerService: FertilizerService,
        private calcluationService: CalcluationService
    ) {
        this.fertilizerKeys = fertilizerService.getAllKnownElements();
        fertilizerService.currentList$.subscribe((list) => {
          this.list = list;
        });
    }

    onAmountChange(e) {
       this.list.result = this.calcluationService.calculateResultComposition(this.list);
       this.fertilizerService.currentList$.next(this.list);
    }

    ngAfterContentInit() {
        this.composition = this.fertilizerKeys.reduce((acc, curr) => {
            return `${acc} \n ${curr}: ${
                this.fertilizer.composition[curr].weightProportion
            }`;
        }, 'Содержит: ');
    }
}
