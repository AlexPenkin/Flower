import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-fertilizers-all',
  templateUrl: './fertilizers-all.component.html',
  styleUrls: ['./fertilizers-all.component.css']
})
export class FertilizersAllComponent implements OnInit {
  @HostBinding('attr.class') class = 'layout';

  constructor() { }

  ngOnInit() {
  }

}
