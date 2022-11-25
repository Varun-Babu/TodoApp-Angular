import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';

const myRoute : Routes=[
  {
  path:"",
  component:HomeLoginComponent
  },
  {
    path:"add",
    component:AddToDoComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
