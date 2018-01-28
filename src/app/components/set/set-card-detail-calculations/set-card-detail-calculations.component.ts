import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterViewChecked
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Element, N, P, K } from '../../../models/Elements';
import { Fertilizer, IFertilizer } from '../../../models/fertilizer';
import { FertilizerService } from '../../../services/fertilizer.service';
import { CalcluationService } from '../../../services/calcluation.service';
import { IFertilizerList, FertilizerList } from '../../../models/set';
import { Composition } from '../../../models/composition';

@Component({
    selector: 'app-set-card-detail-calculations',
    templateUrl: './set-card-detail-calculations.component.html',
    styleUrls: ['./set-card-detail-calculations.component.css'],
    preserveWhitespaces: false
})
export class SetCardDetailCalculationsComponent implements OnInit {
    currentList: FertilizerList;
    lists: FertilizerList[];
    litrage: number;
    fertilizerKeys: any;
    fertilizers$: Observable<Fertilizer[]>;
    constructor(
        private fertilizerService: FertilizerService,
        private calcluationService: CalcluationService
    ) {
        this.fertilizers$ = this.fertilizerService.currentList$.map(
            val => val.fertilizers
        );
        this.fertilizerKeys = Object.keys(new Composition());
        this.lists = this.fertilizerService.lists;
    }

    ngOnInit() {
        this.fertilizerService.currentList$.subscribe(list => {
            this.currentList = list;
        });
    }

    onLitrageChange() {
        this.currentList.result = this.calcluationService.calculateResultComposition(
            this.currentList
        );
        this.fertilizerService.currentList$.next(this.currentList);
    }

    onListSelect(id: number) {
        this.fertilizerService.setCurrentList(id);
    }
}
