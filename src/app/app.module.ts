import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BooktableComponent } from './orderonline/booktable/booktable.component';
import { OrderfoodComponent } from './orderonline/orderfood/orderfood.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OrderonlineComponent,
    MenuComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    LoginComponent,
    FooterComponent,
    BooktableComponent,
    OrderfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
