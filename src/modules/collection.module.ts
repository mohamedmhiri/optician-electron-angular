import { AppRouterModule } from './../routes/app-router.module';
import { MainPageComponent } from './../components/main-page/main-page';
import { UtilModule } from './util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    AppRouterModule,
  ],
  declarations: [
    //ErrorComponent,
    MainPageComponent,
    //LoginComponent    
  ],
  exports: [
    AppRouterModule,
  ]
})
export class CollectionModule { }
