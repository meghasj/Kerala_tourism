import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ListingpageComponent } from '../pages/listingpage/listingpage.component';
import { DetailspageComponent } from '../pages/detailspage/detailspage.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { LoginComponent } from '../pages/login/login.component';

export const routes: Routes = [

    {
        path:'',component:HomeComponent
    },
    {
        path:'listingpage',component:ListingpageComponent
    },
    { path: 'details/:id', component: DetailspageComponent },
   {
    path:'signup',component:SignupComponent
   },
   {
    path: 'login', component: LoginComponent
},

];
