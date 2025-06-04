import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFirstComponent } from './my-first/my-first.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent, // new component create

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
