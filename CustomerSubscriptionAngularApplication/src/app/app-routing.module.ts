import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListingComponent } from './customer-listing/customer-listing.component'
import { SignupComponent } from './signup/signup.component'
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path: 'customerlisting', component: CustomerListingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newcustomer', component: NewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
