import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getApi(category: string, title: string):Observable<any>{
    let type: string = category;
    const params = new HttpParams().set('q', title)
    return this.http.get<any>(`${environment.searchUrlApi}${type}`,{params})
  }

}
