import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ferilizers-sets',
  templateUrl: './ferilizers-sets.component.html',
  styleUrls: ['./ferilizers-sets.component.css'],
})
export class FerilizersSetsComponent implements OnInit {
  @Input() lists;
  @Output() listSelected = new EventEmitter();
  constructor() {
    
   }

   onSelectList(id: number | string): void {
    this.listSelected.emit(id);
   }

  ngOnInit() {
  }

}
