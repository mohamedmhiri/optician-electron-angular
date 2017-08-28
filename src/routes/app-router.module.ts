import { MainPageComponent } from './../components/main-page/main-page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
      path: '',
      redirectTo: 'app',
      pathMatch: 'full'
    },
    /*{
      path: 'login',
      component: LoginComponent
    },*/
    {
      path: 'app',
      /*loadChildren: '../../modules/menu/menu.module#MenuModule',
      canActivate: [AuthGuard],*/
      component: MainPageComponent
    },
    /*{
      path: '**',
      component: ErrorComponent,
    }*/
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }