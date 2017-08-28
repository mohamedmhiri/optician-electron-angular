import { MainPageModule } from './modules/main-page.module';
import { UtilModule } from './modules/util.module';
import { CollectionModule } from './modules/collection.module';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'App',
  template:
  `
    <router-outlet></router-outlet>
    <main-page></main-page>
  `
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('component initialized');
  }
}


@NgModule({
  imports: [
    BrowserModule,
    CollectionModule,
    UtilModule,
    MainPageModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [
    CollectionModule,
    MainPageModule
  ]
})
export class AppModule { }

