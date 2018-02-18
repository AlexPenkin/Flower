import { Component, OnInit, HostBinding } from '@angular/core';
import { FertilizerService } from '../../../services/fertilizer.service';
import { SetService } from '../../../services/set.service';
import { FertilizerList } from '../../../models/set';
import { Observable } from 'rxjs/Observable';
import { IFertilizer } from '../../../models/fertilizer';
import { Response } from '@angular/http';

@Component({
  selector: 'app-set-create-edit',
  templateUrl: './set-create-edit.component.html',
  styleUrls: ['./set-create-edit.component.css']
})
export class SetCreateEditComponent implements OnInit {
  fertilizers: Array<IFertilizer> = [];
  set: FertilizerList = new FertilizerList('New');
  @HostBinding('attr.class') class = 'layout';
  constructor(private fertilizerService: FertilizerService, private setService: SetService) { }

  ngOnInit() {
    this.fertilizerService.getAllFertilizers()
      .subscribe(fertilizers => this.fertilizers = fertilizers);
  }

  onFertilizerSelect(id) {
    const desiredFertilizer = this.fertilizers.find(fertilizer => fertilizer.ID === id);
    this.set.add(desiredFertilizer);
  }

  onSave() {
    this.setService.save(this.set);
  }

}
