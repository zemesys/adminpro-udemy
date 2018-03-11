import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// esta es otra maner de hacer un import con varios componentes o servicios
import {
   SettingsService,
   SharedService,
   SidebarService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],

  declarations: []
})
export class ServiceModule { }
