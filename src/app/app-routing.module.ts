import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
   { path: '', component: HomeComponent},  //default routing -- home
   { path: 'about', component: AboutComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'user/:id', component: UserInfoComponent}, // parameter passing in routing
   { path: 'about/:id/:name/:age', component: AboutComponent},
   { path: '**', component: Error404Component} // error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
