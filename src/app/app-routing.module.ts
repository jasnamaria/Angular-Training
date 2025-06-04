import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyFirstComponent} from './my-first/my-first.component';


const routes: Routes = [
    {path: 'first', component: MyFirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
