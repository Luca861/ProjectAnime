import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPartialAnimeManga, PartialAnimeManga } from 'src/app/shared/models/interfaces-models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getApi(category: string, title: string):Observable<PartialAnimeManga[]>{
    let type: string = category;
    const params = new HttpParams().set('q', title)
    return this.http.get<{results:IPartialAnimeManga[]}>(`${environment.searchUrlApi}${type}`,{params})
    .pipe(
      map(response => response.results.map(item => PartialAnimeManga.Build(item)))
      );
  }

}
