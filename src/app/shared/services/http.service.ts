import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
   providedIn: 'root'
})
export class HttpService {
  
      
   constructor(private http: HttpClient) {}
    
   getRepositories(user: string) : Observable <any> {
        return this.http.get(`${environment.urlBackend}/users/${user}/repos`);
   }

   getUser(user): Observable <any> {
      return this.http.get(`${environment.urlBackend}/users/${user}`);
  }

}