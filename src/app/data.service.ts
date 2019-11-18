import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }

  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error!';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side errors
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Server-side errors
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }
  
  // public sendGetRequest():Observable<any>{
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }

  // public sendGetRequest():Promise<any>{
  //   return this.httpClient.get(this.REST_API_SERVER).toPromise();
  // }
  
  public sendGetRequest():Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getProductById(Id):Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER+'/' + Id);
  }

  public checkLogin() {
    return {token: '123ryhjurhkdi567'};
  }

  public checkUserAuthenticated() {
    return !! localStorage.getItem('token');
  }


}
