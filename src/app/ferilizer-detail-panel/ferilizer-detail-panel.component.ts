import { Component, OnInit, Input } from '@angular/core';
import { FertilizerService } from '../fertilizer.service';

@Component({
  selector: 'app-ferilizer-detail-panel',
  templateUrl: './ferilizer-detail-panel.component.html',
  styleUrls: ['./ferilizer-detail-panel.component.css']
})
export class FerilizerDetailPanelComponent implements OnInit {
  @Input() fertilizer: any;
  fertilizerKeys: string[];

  constructor(private fertilizerService: FertilizerService) {
    this.fertilizerKeys = fertilizerService.getAllKnownElements();
   }

  ngOnInit() {
  }

}
