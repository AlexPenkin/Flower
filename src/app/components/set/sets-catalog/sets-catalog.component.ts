import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sets-catalog',
    templateUrl: './sets-catalog.component.html',
    styleUrls: ['./sets-catalog.component.css']
})
export class SetsCatatlogComponent implements OnInit {
    @Input() sets;
    @Output() listSelected = new EventEmitter();
    constructor() {}

    onSelectList(id: number | string): void {
        this.listSelected.emit(id);
    }

    ngOnInit() {}
}
