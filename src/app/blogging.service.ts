import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Datas } from './datas';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {
  private url ="http://localhost:3000/users"
 
  private url2 ="http://localhost:3000/blogPosts/"
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient){ }

  GetAllUserData():Observable<any>{
    return this.httpClient.get(this.url)
    .pipe(
      catchError(this.errorHandler)
    )}

    GetEditPost(id:any):Observable<any>{
      console.log(this.url2+id);
      return this.httpClient.get(this.url2+id )
      .pipe(
        catchError(this.errorHandler)
      )}


  Registruser(user:Datas):Observable<any>{
 return this.httpClient.post(this.url , JSON.stringify(user) ,this.httpOptions)
 .pipe(catchError(this.errorHandler))
  }

  GetAllblogposts():Observable<any>{
    return this.httpClient.get(this.url2)
    .pipe(
      catchError(this.errorHandler)
    )}


    updatepost(id:number, post:Datas): Observable<any> {
  
      return this.httpClient.put(this.url2 + id, JSON.stringify(post), this.httpOptions)
     .pipe( 
        catchError(this.errorHandler)
      )
    }

    Addblogg(post:Datas):Observable<any>{
      console.log(post);
      return this.httpClient.post(this.url2 ,JSON.stringify(post) ,this.httpOptions)
      .pipe(catchError(this.errorHandler))
       }
     
       delete(id:string){
        console.log(this.url2+id);
        return this.httpClient.delete(this.url2 + id, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }


      


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
