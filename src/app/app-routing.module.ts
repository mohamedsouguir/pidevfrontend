import {  NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import  {ParentComponent} from '../app/parent/parent.component';
import { ProfilComponent } from './profil/profil.component';
import { KindergartenProfilComponent } from './kindergarten-profil/kindergarten-profil.component';
import { KindergartenManagerComponent } from './kindergarten-manager/kindergarten-manager.component';



const routes:Routes = [
  {path:"home", component :HomeComponent},
  {path: "sign in", component:SignInComponent},
  {path: "sign up", component:SignUpComponent},
  {path: "admin", component:AdminComponent},
  {path: "parent", component:ParentComponent},
  {path:"ProfilParent", component:ProfilComponent},
  {path:"Profilkindergarten", component:KindergartenProfilComponent},
  {path: "KinderGartenManagment", component:KindergartenManagerComponent},
  {path:'kindergarten', component: KindergartenManagerComponent}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [KindergartenManagerComponent]
