import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fertilizer-card-detail',
    templateUrl: './fertilizer-card-detail.component.html',
    styleUrls: ['./fertilizer-card-detail.component.css']
})
export class FertilizerCardDetailComponent implements OnInit {
    @Input() currentFertilizer;
    constructor() {}

    ngOnInit() {}
}
