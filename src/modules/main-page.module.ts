import { HomeComponent } from './../components/home/home';
import { MainPageRouterModule } from './../routes/main-page-router.module';
import { UtilModule } from './util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        MainPageRouterModule,
        HttpModule,
        UtilModule,
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HttpModule,
    ],
})
export class MainPageModule { }

