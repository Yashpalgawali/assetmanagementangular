import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../company';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private http : HttpClient) {   }
  comp : Company = new Company();

  baseUrl = "http://localhost:7979/company/";
  getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }
  public saveCompany(company : Company):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,company);
  }
  
  public getCompanyById(cid : number):Observable<Company>
  {
    return this.http.get<Company>(`${this.baseUrl}${cid}`);
  }

  public updateCompany(company : Company):Observable<Object>{
    
    return this.http.post(`${this.baseUrl}`,company);
  }
}