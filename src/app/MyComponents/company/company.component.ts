import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  complist: Company[] | undefined ;
  
  company : Company = new Company() ;
  constructor(private compserv : CompanyserviceService,
              private router : Router) {
    
   }

  ngOnInit(): void {
  }
  savecompany()
  {
    this.compserv.saveCompany(this.company).subscribe(data=>this.company),(error: any)=>console.log(error);
  }
  gotoCompanyList()
  {
    this.router.navigate(['viewcompany']);
  }
  onSubmit(){
    this.savecompany();
  }
    
 
}