import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListingComponent } from './customer-listing/customer-listing.component'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: 'customerlisting', component: CustomerListingComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
