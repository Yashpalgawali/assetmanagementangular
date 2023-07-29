import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './MyComponents/company/company.component';
import { ViewcompanyComponent } from './MyComponents/viewcompany/viewcompany.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  { path : "addcompany"  , component : CompanyComponent},
  { path : ""  ,  component : HomeComponent},
  { path : "viewcompany" , component : ViewcompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
