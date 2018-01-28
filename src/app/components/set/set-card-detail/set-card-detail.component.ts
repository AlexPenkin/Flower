import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-card-detail',
  templateUrl: './set-card-detail.component.html',
  styleUrls: ['./set-card-detail.component.css']
})
export class SetCardDetailComponent implements OnInit {
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}
