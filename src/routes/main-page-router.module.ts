import { HomeComponent } from './../components/home/home';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    /*{
        path: 'app',
        component: HelloComponent
    },*/
    {
      path: 'home',
      component: HomeComponent
    },
    /*{
      path: 'stats',
      component: StatsComponent
    },
    {
      path: 'article',
      component: ArticleComponent
    },
    {
      path: 'vat',
      component: VatComponent
    },
    {
      path: 'client',
      component: ClientsComponent
    },
    {
      path: 'supplier',
      component: SuppliersComponent
    },
    {
      path: 'bill',
      component: BillComponent
    },
    {
      path: 'delivery',
      component: DeliveryFormComponent
    },
    {
      path: 'cmd',
      component: CommandComponent
    },
    {
      path: 'asset',
      component: AssetsComponent
    },
    {
      path: 'sale',
      component: SalesComponent
    },
    {
      path: 'purchase',
      component: PurchaseComponent
    },
    {
      path: 'inventary',
      component: InventaryComponent
    },
    {
      path: 'closing',
      component: ClosingComponent
    },
    {
      path: 'payment',
      component: PaymentComponent
    }*/
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),// Add routes to the app
  ],
  declarations: [

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule
  ]
})
export class MainPageRouterModule { }
