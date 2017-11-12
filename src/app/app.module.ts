import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { FertilizerService } from './services/fertilizer.service';
import { SelectComponent } from './select/select.component';
import { FerilizerDetailPanelComponent } from './ferilizer-detail-panel/ferilizer-detail-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    FertilizersComponent,
    CalculationsComponent,
    SelectComponent,
    FerilizerDetailPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [FertilizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
