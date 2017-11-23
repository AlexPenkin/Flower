import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-fertilizers',
    templateUrl: './fertilizers.component.html',
    styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent implements OnInit {
    composition: string;
    @Output() onSelect = new EventEmitter();
    @Input() fertilizers;
    constructor() {}

    onClick(id: string): void {
        this.onSelect.emit(id);
    }

    ngOnInit() {}
}
