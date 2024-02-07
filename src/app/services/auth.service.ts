import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/auth/get';

  constructor(private http: HttpClient) {}

  getData(options?: any): Observable<any> {
    /*const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json', // or 'text' depending on your Angular version
    };*/
    const httpOptions = {
      responseType: 'text'
    };
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
