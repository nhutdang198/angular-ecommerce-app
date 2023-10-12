import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import {
  heroShoppingCart,
  heroCube,
  heroCheckBadge,
} from '@ng-icons/heroicons/outline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    SuccessOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroShoppingCart, heroCube, heroCheckBadge }),
  ],
  providers: [
    provideNgIconsConfig({
      size: '2.5em',
      color: 'red',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
