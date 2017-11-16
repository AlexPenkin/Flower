import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FertilizersListComponent } from './components/fertilizers-list/fertilizers.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { CalculationsPanelComponent } from './components/calculations-panel/calculations.component';
import { FertilizerService } from './services/fertilizer.service';
import { SelectComponent } from './components/select/select.component';
import { FerilizerDetailPanelComponent } from './components/ferilizer-detail-panel/ferilizer-detail-panel.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddFerilizerComponent } from './components/add-ferilizer/add-ferilizer.component';
import { FertilizersAllComponent } from './components/fertilizers-all/fertilizers-all.component';
import { FertilizersComponent } from './components/fertilizers/fertilizers.component';

@NgModule({
  declarations: [
    AppComponent,
    FertilizersListComponent,
    CalculationsComponent,
    CalculationsPanelComponent,
    SelectComponent,
    FerilizerDetailPanelComponent,
    LayoutComponent,
    AddFerilizerComponent,
    FertilizersAllComponent,
    FertilizersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [FertilizerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
