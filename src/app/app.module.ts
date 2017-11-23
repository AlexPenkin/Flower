import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FertilizersListComponent } from './components/fertilizers-set/fertilizers.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { CalculationsPanelComponent } from './components/calculations-panel/calculations.component';
import { FertilizerService } from './services/fertilizer.service';
import { SelectComponent } from './components/select/select.component';
import { FerilizerDetailPanelComponent } from './components/ferilizer-detail-panel/ferilizer-detail-panel.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddFerilizerComponent } from './components/add-ferilizer/add-ferilizer.component';
import { FertilizersAllComponent } from './components/fertilizers-all/fertilizers-all.component';
import { FertilizersComponent } from './components/fertilizers/fertilizers.component';
import { FerilizersSetsAllComponent } from './components/ferilizers-sets-all/ferilizers-sets.component';
import { FerilizersSetsComponent } from './components/ferilizers-sets/ferilizers-sets.component';
import { FerilizersSetsDetailPanelComponent } from './components/ferilizers-sets-detail/ferilizers-sets-detail-panel.component';
import { FertilizerDetailComponent } from './components/fertilizer-detail/fertilizer-detail.component';

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
        FertilizersComponent,
        FerilizersSetsAllComponent,
        FerilizersSetsComponent,
        FerilizersSetsDetailPanelComponent,
        FertilizerDetailComponent
    ],
    imports: [
        HttpClientModule,
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
