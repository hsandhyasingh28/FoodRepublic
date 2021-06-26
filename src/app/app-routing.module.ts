import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BooktableComponent } from './orderonline/booktable/booktable.component';
import { OrderfoodComponent } from './orderonline/orderfood/orderfood.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  // {path:'orderonline',component:OrderonlineComponent},
  {path:'menu',component:MenuComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
{path:'orderonline',component:OrderonlineComponent,children:[
    {path:'booktable',component:BooktableComponent},
    {path:'orderfood',component:OrderfoodComponent}
]},

  
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
