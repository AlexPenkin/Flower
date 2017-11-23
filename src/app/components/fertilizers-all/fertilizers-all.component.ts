import { Component, OnInit, HostBinding } from '@angular/core';
import { FertilizerService } from '../../services/fertilizer.service';
import { Fertilizer } from '../../models/fertilizer';

@Component({
    selector: 'app-fertilizers-all',
    templateUrl: './fertilizers-all.component.html',
    styleUrls: ['./fertilizers-all.component.css']
})
export class FertilizersAllComponent implements OnInit {
    @HostBinding('attr.class') class = 'layout';
    fertilizers: Fertilizer[];
    fertilizerKeys: string[];
    currentFertilizer: Fertilizer;

    constructor(private fertilizerService: FertilizerService) {
        this.fertilizerKeys = fertilizerService.getAllKnownElements();
        this.fertilizerService.fertilizers$.subscribe(fertilizers => {
            this.fertilizers = fertilizers;
        });
    }

    onFertilizerSelect(id: number | string) {
      console.log(id)
      this.currentFertilizer = this.fertilizers.find( fert => fert.ID === +id);
    }

    ngOnInit() {
        this.fertilizerService.getAllNet();
    }
}
