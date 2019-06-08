import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListingComponent } from './customer-listing/customer-listing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListingComponent,
    LoginComponent,
    SignupComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    SubscribeServiceComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
