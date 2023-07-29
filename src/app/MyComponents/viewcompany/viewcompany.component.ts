import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from 'src/app/Services/companyservice.service';
import { Company } from 'src/app/company';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.css']
})
export class ViewcompanyComponent implements OnInit {

  complist : Company[] |undefined;
  constructor(private compserv : CompanyserviceService) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }
  private getAllCompanies()
    {
      this.compserv.getAllCompanies().subscribe(data =>this.complist=data);
    }
}
