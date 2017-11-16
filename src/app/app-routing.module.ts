import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { AddFerilizerComponent } from './components/add-ferilizer/add-ferilizer.component';
import { FertilizersAllComponent } from './components/fertilizers-all/fertilizers-all.component';

const appRoutes: Routes = [
  { path: 'calculations', component: CalculationsComponent },
  { path: 'addFerilizer', component: AddFerilizerComponent },
  { path: 'fertilizers', component: FertilizersAllComponent },
  { path: '', redirectTo: '/calculations', pathMatch: 'full' },
  { path: '**', component: CalculationsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule],
  providers: [CalculationsComponent, AddFerilizerComponent]
})
export class AppRoutingModule {}
