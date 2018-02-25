import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const appRuotes: Routes = [


    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRuotes, {useHash: true} );

