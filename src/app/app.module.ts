import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,  
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
