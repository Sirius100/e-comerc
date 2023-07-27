import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { Observable, throwError, delay } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from "../models/products";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: "root"
}) 

export class ProductService{
  constructor( 
    private http: HttpClient,
    private errorService: ErrorService,
    ) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products',
    {params: new HttpParams().append('limit',20)}).pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError( () => error.message)
  }
}