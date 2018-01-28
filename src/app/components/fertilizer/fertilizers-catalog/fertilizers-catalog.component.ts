import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-fertilizers-catatlog',
    templateUrl: './fertilizers-catalog.component.html',
    styleUrls: ['./fertilizers-catalog.component.css']
})
export class FertilizersCatatlogComponent implements OnInit {
    composition: string;
    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();
    @Input() fertilizers;
    constructor() {}

    onClick(id: string): void {
        this.onSelect.emit(id);
    }

    delete(id: string): void {
        this.onDelete.emit(id);
    }

    ngOnInit() {}
}
