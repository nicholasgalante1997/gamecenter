import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('search', search);
    }
    return this.http.get<APIResponse<Game>>(`${env.baseUrl}/games`, {
      params
    })
  }
}
