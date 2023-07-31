import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {

  company : Company = new Company();
  id !: number;
  constructor(private compserv : CompanyserviceService,
              private router : ActivatedRoute , private route : Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.compserv.getCompanyById(this.id).subscribe(data=>{this.company=data});
  }

  public onSubmit()
  {
    this.updateCompany();
  }

  public updateCompany()
  {
    this.compserv.updateCompany(this.company).subscribe(data=>this.gotoCompanyList()),(error: any)=>console.log(error);
    
  }
  gotoCompanyList()
  {
    this.route.navigate(['viewcompany']);
  }
}
