import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FertilizerService } from '../../../services/fertilizer.service';
import { FertilizerList } from '../../../models/set';

@Component({
    selector: 'app-sets-page',
    templateUrl: './sets-page.component.html',
    styleUrls: ['./sets-page.component.css']
})
export class SetsPageComponent implements OnInit {
    lists: FertilizerList[];
    selectedList: FertilizerList;
    @HostBinding('attr.class') class = 'layout';
    constructor(private fertilizerService: FertilizerService) {
        this.lists = fertilizerService.lists;
    }
    onListSelected(id) {
        this.selectedList = this.lists.find(list => list.ID === +id);
    }
    ngOnInit() {}
}
