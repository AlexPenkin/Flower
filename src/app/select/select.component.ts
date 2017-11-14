import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() model: any;
  @Output() onSelectOut = new EventEmitter<number>();
  selectedValue = 1;

  onSelect({ value }): void {
    this.onSelectOut.emit(value);
    this.selectedValue = value;
  }

  ngOnInit() {}
}
