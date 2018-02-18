import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import { FertilizerService } from './services/fertilizer.service';
import { AuthService } from './services/auth.service';
import { CalcluationService } from './services/calcluation.service';
import { SetService } from './services/set.service';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

// tslint:disable:max-line-length
import { AppComponent } from './app.component';
import { SelectComponent } from './components/common/select/select.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { UserProfileComponent } from './components/common/user-profile/user-profile.component';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { CalculationsElementsTableComponent } from './components/calculation/calculations-elements-table/calculations-elements-table.component';
import { AddFerilizerComponent } from './components/fertilizer/adding-ferilizer/adding-ferilizer.component';
import { FerilizerCardPreviewCalculationsComponent } from './components/fertilizer/ferilizer-card-preview-calculations/ferilizer-card-preview-calculations.component';
import { FertilizerCardDetailComponent } from './components/fertilizer/fertilizer-card-detail/fertilizer-card-detail.component';
import { FertilizersCatatlogComponent } from './components/fertilizer/fertilizers-catalog/fertilizers-catalog.component';
import { FertilizersPageComponent } from './components/fertilizer/fertilizers-page/fertilizers-page.component';
import { SetsPageComponent } from './components/set/sets-page/sets-page.component';
import { SetsCatatlogComponent } from './components/set/sets-catalog/sets-catalog.component';
import { SetCardDetailComponent } from './components/set/set-card-detail/set-card-detail.component';
import { SetCardDetailCalculationsComponent } from './components/set/set-card-detail-calculations/set-card-detail-calculations.component';
import { SetCreateEditComponent } from './components/set/set-create-edit/set-create-edit.component';

// tslint:enable:max-line-length
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(
        new AuthConfig({
            tokenGetter: () => localStorage.getItem('access_token')
        }),
        http,
        options
    );
}

@NgModule({
    declarations: [
        AppComponent,
        CalculationsComponent,
        CalculationsElementsTableComponent,
        SelectComponent,
        FerilizerCardPreviewCalculationsComponent,
        LayoutComponent,
        AddFerilizerComponent,
        UserProfileComponent,
        FertilizerCardDetailComponent,
        FertilizersCatatlogComponent,
        FertilizersPageComponent,
        SetsPageComponent,
        SetsCatatlogComponent,
        SetCardDetailComponent,
        SetCardDetailCalculationsComponent,
        SetCreateEditComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpModule
    ],
    providers: [
        FertilizerService,
        AuthService,
        CalcluationService,
        SetService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
