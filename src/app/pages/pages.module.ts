import { NgModule } from '@angular/core';

// modulos
import { SharedModule } from '../shared/shared.module';
// rutas
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule

    ]

})

export class PagesModule {}
