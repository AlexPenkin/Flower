import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ferilizers-sets-detail-panel',
  templateUrl: './ferilizers-sets-detail-panel.component.html',
  styleUrls: ['./ferilizers-sets-detail-panel.component.css']
})
export class FerilizersSetsDetailPanelComponent implements OnInit {
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}
