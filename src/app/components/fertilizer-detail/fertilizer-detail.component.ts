import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fertilizer-detail',
    templateUrl: './fertilizer-detail.component.html',
    styleUrls: ['./fertilizer-detail.component.css']
})
export class FertilizerDetailComponent implements OnInit {
    @Input() currentFertilizer;
    constructor() {}

    ngOnInit() {}
}
