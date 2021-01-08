import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { LoginComponent } from './Account/login/login.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [	
    AppComponent,
      NavbarMenuComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
