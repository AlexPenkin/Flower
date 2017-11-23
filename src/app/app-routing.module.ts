import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { AddFerilizerComponent } from './components/add-ferilizer/add-ferilizer.component';
import { FertilizersAllComponent } from './components/fertilizers-all/fertilizers-all.component';
import { FerilizersSetsAllComponent } from './components/ferilizers-sets-all/ferilizers-sets.component';
import { FertilizerDetailComponent } from './components/fertilizer-detail/fertilizer-detail.component';

const appRoutes: Routes = [
  { path: 'calculations', component: CalculationsComponent },
  { path: 'addFertilizer', component: AddFerilizerComponent },
  { path: 'fertilizers', component: FertilizersAllComponent },
  { path: 'fertilizer', component: FertilizerDetailComponent },
  { path: 'fertilizers-lists', component: FerilizersSetsAllComponent },
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
