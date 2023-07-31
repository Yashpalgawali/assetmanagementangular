import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import DataTables from 'datatables.net';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { Company } from 'src/app/company';
declare const $ :any;
@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent implements OnInit {

  complist : Company[] |undefined;
  constructor(private compserv : CompanyserviceService, private route : ActivatedRoute, private router : Router) { }
  company : Company = new Company();
  
  dtOptions = DataTables;

  ngOnInit(): void {
      this.getAllCompanies();
  }
  
  private getAllCompanies(){
      this.compserv.getAllCompanies().subscribe(data =>this.complist=data);
  }
  public getCompById(comp_id: any){

    this.router.navigate(['editcompany',comp_id]);

  }
}
