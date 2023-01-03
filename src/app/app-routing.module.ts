import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSellerProductComponent } from './add-seller-product/add-seller-product.component';
import { ListComponent } from './AddSellerProduct/list/list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { AirTicketComponent } from './SideNavBar/air-ticket/air-ticket.component';
import { AutoCareComponent } from './SideNavBar/auto-care/auto-care.component';
import { AutoMobileComponent } from './SideNavBar/auto-mobile/auto-mobile.component';
import { BabyCareComponent } from './SideNavBar/baby-care/baby-care.component';
import { BookComponent } from './SideNavBar/book/book.component';
import { LoansComponent } from './SideNavBar/loans/loans.component';
import { OnDemandServicesFilComponent } from './SideNavBar/on-demand-services-fil/on-demand-services-fil.component';
import { ShoppingComponent } from './SideNavBar/shopping/shopping.component';
import { TrainComponent } from './SideNavBar/train/train.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ComingSoon', component: ComingSoonComponent },
  { path: 'Loans', component: LoansComponent },
  { path: 'AutoMobile', component: AutoMobileComponent },
  { path: 'AutoCare', component: AutoCareComponent },
  { path: 'On-Demand-Services_fil', component: OnDemandServicesFilComponent },
  { path: 'AirTicket', component: AirTicketComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Shopping', component: ShoppingComponent },
  { path: 'BabyCare', component: BabyCareComponent },
  { path: 'Books', component: BookComponent },
  { path: 'Train', component: TrainComponent },
  { path: 'List', component: ListComponent },
  { path: 'SellerProduct', component: AddSellerProductComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
