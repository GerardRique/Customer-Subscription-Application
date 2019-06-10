import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListingComponent } from './customer-listing/customer-listing.component'
import { SignupComponent } from './signup/signup.component'
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SubscribeServiceComponent } from './subscribe-service/subscribe-service.component';
import { LoginComponent } from './login/login.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'customerlisting', component: CustomerListingComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newcustomer', component: NewCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent},
  { path: 'subscribe/:id', component: SubscribeServiceComponent},
  { path: '', component: SignupComponent },
  { path: '**', component: SignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
