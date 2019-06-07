import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListingComponent } from './customer-listing/customer-listing.component'
import { SignupComponent } from './signup/signup.component'
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';

const routes: Routes = [
  { path: 'customerlisting', component: CustomerListingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newcustomer', component: NewCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent},
  { path: 'subscribe/:id', component: SubscribeServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
