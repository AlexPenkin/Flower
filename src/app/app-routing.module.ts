import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { AddFerilizerComponent } from './components/fertilizer/adding-ferilizer//adding-ferilizer.component';
import { FertilizersPageComponent } from './components/fertilizer/fertilizers-page/fertilizers-page.component';
import { SetsPageComponent } from './components/set/sets-page/sets-page.component';
import { FertilizerCardDetailComponent } from './components/fertilizer/fertilizer-card-detail/fertilizer-card-detail.component';
import { SetCreateEditComponent } from './components/set/set-create-edit/set-create-edit.component';

const appRoutes: Routes = [
  { path: 'calculations', component: CalculationsComponent },
  { path: 'addFertilizer', component: AddFerilizerComponent },
  { path: 'fertilizers', component: FertilizersPageComponent },
  { path: 'fertilizer', component: FertilizerCardDetailComponent },
  { path: 'fertilizers-lists', component: SetsPageComponent },
  { path: 'setCreate', component: SetCreateEditComponent },
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
