import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kindergartens } from './kindergartens';
import { environment } from '../environments/environment';
import {ApiResponse} from "./api.response";



@Injectable({
  providedIn: 'root'
})
export class KindergartenProfilService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient ) { }

  

 
  public getKindergarten(): Observable<Kindergartens[]>{
    return this.http.get<Kindergartens[]>(`${this.apiServerUrl}/SpringMVC/servlet/listKinder`);
  }
  public addKindergarten(kindergartens : FormData): Observable<Kindergartens>{
    return this.http.post<Kindergartens>(`${this.apiServerUrl}/SpringMVC/servlet/add`,kindergartens);
  }

  public updateKindergarten(kindergarten: Kindergartens, id :number): Observable<Kindergartens>{
    return this.http.put<Kindergartens>(`${this.apiServerUrl}/SpringMVC/servlet/updateKidndergarten/${id}`,kindergarten);
  }

  public deleteKindergarten(kindergartenId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/SpringMVC/servlet/deleteKindergarten/${kindergartenId}`);
  }
  public getKindergartenbyId(id): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/SpringMVC/servlet/kindergarten/${id}`);
  }

public getKindergartenByName(firstName:string){
  return this.http.get<Kindergartens[]>(`${this.apiServerUrl}/SpringMVC/servlet/search/${firstName}`);
}
 
}
