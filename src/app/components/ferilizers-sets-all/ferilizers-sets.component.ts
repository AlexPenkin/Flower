import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FertilizerService } from '../../services/fertilizer.service';
import { FertilizerList } from '../../models/fertilizersList';

@Component({
  selector: 'app-ferilizers-sets-all',
  templateUrl: './ferilizers-sets.component.html',
  styleUrls: ['./ferilizers-sets.component.css']
})
export class FerilizersSetsAllComponent implements OnInit {
  lists: FertilizerList[];
  selectedList: FertilizerList;
  @HostBinding('attr.class') class = 'layout';
  constructor(private fertilizerService: FertilizerService) {
    this.lists = fertilizerService.sets;
  }
  onListSelected(id) {
    this.selectedList = this.lists.find(list => list.ID === +id);
  }
  ngOnInit() {}
}
