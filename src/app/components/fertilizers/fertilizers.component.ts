import { Component, OnInit } from '@angular/core';
import { FertilizerService } from '../../services/fertilizer.service';
import {Fertilizer} from '../../models/fertilizer';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent implements OnInit {
  fertilizers: Fertilizer[];
  fertilizerKeys: string[];
  composition: string;
  constructor(private fertilizerService: FertilizerService) {
    this.fertilizerKeys = fertilizerService.getAllKnownElements();
    this.fertilizers = this.fertilizerService.getAll();
  }

  ngOnInit() {}
}
