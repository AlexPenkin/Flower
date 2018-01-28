import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Fertilizer } from '../../../models/fertilizer';
import { FertilizerService } from '../../../services/fertilizer.service';
import { CalcluationService } from '../../../services/calcluation.service';
import { Composition } from '../../../models/composition';
@Component({
    selector: 'app-calculations-elements-table',
    templateUrl: './calculations-elements-table.component.html',
    styleUrls: ['./calculations-elements-table.component.css']
})
export class CalculationsElementsTableComponent implements OnInit {
    result: Composition = new Composition();
    keys: string[];

    constructor(
        private fertilizerService: FertilizerService,
        private calculationService: CalcluationService
    ) {
        this.result = this.calculationService.calculateResultComposition(
            this.fertilizerService.currentList
        );
        this.keys = this.fertilizerService.getAllKnownElements();
    }

    ngOnInit() {
        this.fertilizerService.currentList$
            .subscribe(fertilizerList => {
                this.result = this.calculationService.calculateResultComposition(fertilizerList);
            });
        this.keys = this.fertilizerService.getAllKnownElements();
    }
}
