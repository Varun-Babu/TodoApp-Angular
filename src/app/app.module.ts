import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute : Routes=[
  {
  path:"",
  component:HomeLoginComponent
  },
  {
    path:"add",
    component:AddToDoComponent
  },
  {
    path:"view",
    component:ViewComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    AddToDoComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
