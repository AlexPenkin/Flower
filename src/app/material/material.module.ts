import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatSliderModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatSliderModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatSliderModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule
  ]
})
export class MaterialModule { }
