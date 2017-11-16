import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FertilizerService } from '../../services/fertilizer.service';
import { FertilizerList } from '../../models/fertilizersList';

@Component({
  selector: 'app-ferilizers-sets-all',
  templateUrl: './ferilizers-sets.component.html',
  styleUrls: ['./ferilizers-sets.component.css']
})
export class FerilizersSetsAllComponent implements OnInit {
  lists$: Observable<FertilizerList[]>;
  selectedId: number;
  @HostBinding('attr.class') class = 'layout';
  constructor(private fertilizerService: FertilizerService) {
    this.lists$ = fertilizerService.getRxLists();
  }
  onListSelected(id) {
    this.selectedId = +id;
  }
  ngOnInit() {}
}
