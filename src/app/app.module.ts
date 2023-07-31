import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './MyComponents/company/company.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewcompanyComponent } from './MyComponents/viewcompany/viewcompany.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { EditcompanyComponent } from './MyComponents/editcompany/editcompany.component';

import DataTable from 'datatables.net-bs5';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ViewcompanyComponent,
    HomeComponent,
    EditcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
