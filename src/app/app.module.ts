import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './screens/products/products.module';
import { CreateProductModule } from './screens/create-product/create-product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CreateProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
