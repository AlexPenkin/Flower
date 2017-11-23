import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterViewChecked
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Element, N, P, K } from '../../models/Elements';
import { Fertilizer, IFertilizer } from '../../models/fertilizer';
import { FertilizerService } from '../../services/fertilizer.service';
import { IFertilizerList, FertilizerList } from '../../models/fertilizersList';
import { Composition } from '../../models/composition';

@Component({
    selector: 'app-fertilizers-list',
    templateUrl: './fertilizers.component.html',
    styleUrls: ['./fertilizers.component.css'],
    preserveWhitespaces: false
})
export class FertilizersListComponent implements OnInit {
    currentList: FertilizerList;
    lists: FertilizerList[];
    litrage: number;
    fertilizerKeys: any;
    fertilizers$: Observable<Fertilizer[]>;
    constructor(private fertilizerService: FertilizerService) {
        this.fertilizers$ = this.fertilizerService.currentList$.map(
            val => val.fertilizers
        );
        this.fertilizerKeys = Object.keys(new Composition());
        this.currentList = this.fertilizerService.currentList;
        this.lists = this.fertilizerService.sets;
    }

    ngOnInit() {
        this.fertilizerService.currentList$.subscribe(list => {
            this.currentList = list;
        });
    }

    onLitrageChange() {
        this.fertilizerService.calcCurrentList();
    }

    onListSelect(id: number) {
        this.fertilizerService.setCurrentList(id);
    }
}
