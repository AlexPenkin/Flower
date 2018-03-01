import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SetService } from '../../../services/set.service';
import { FertilizerList } from '../../../models/set';

@Component({
    selector: 'app-sets-page',
    templateUrl: './sets-page.component.html',
    styleUrls: ['./sets-page.component.css']
})
export class SetsPageComponent implements OnInit {
    allSets: FertilizerList[];
    selectedList: FertilizerList;
    @HostBinding('attr.class') class = 'layout';
    constructor(private setService: SetService) {}
    onListSelected(id) {
        this.selectedList = this.allSets.find(set => set.ID === +id);
    }
    ngOnInit() {
        this.setService.allSets$.subscribe(sets => (this.allSets = sets));
        this.setService.getAllSets();
    }
}
