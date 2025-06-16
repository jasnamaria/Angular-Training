import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { DetailnavbarComponent } from './common/components/detailnavbar/detailnavbar.component';
import { FlexComponent } from './common/components/flex/flex.component';
import { GridComponent } from './common/components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    UserInfoComponent,
    NavbarComponent,
    FooterComponent,
    DetailnavbarComponent,
    FlexComponent,
    GridComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //for Template driven form
    ReactiveFormsModule, // for Reactive form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
