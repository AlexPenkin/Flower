import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  @HostBinding('attr.class') class = 'layout';

  constructor() { }

  ngOnInit() {
  }

}
