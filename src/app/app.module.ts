import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { FertilizerService } from './fertilizer.service';


@NgModule({
  declarations: [
    AppComponent,
    FertilizersComponent,
    CalculationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FertilizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
