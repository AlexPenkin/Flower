import { Component, OnInit, HostBinding } from '@angular/core';
import { FertilizerService } from '../../../services/fertilizer.service';
import { Fertilizer } from '../../../models/fertilizer';

@Component({
    selector: 'app-fertilizers-page',
    templateUrl: './fertilizers-page.component.html',
    styleUrls: ['./fertilizers-page.component.css']
})
export class FertilizersPageComponent implements OnInit {
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
      this.currentFertilizer = this.fertilizers.find( fert => fert.ID === +id);
    }

    onFertilizerDelete(id: string): boolean {
      this.fertilizerService.deleteFertilizer(id);
      return false;
    }

    ngOnInit() {
        this.fertilizerService.getAllAsync();
    }
}
