import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://api.myecomerce.com'; //url del servidor

  //inyectamos HTTPclient
  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    const url = `${this.apiUrl}/cart/items`;
    return this.http.get<any[]>(url);
  }

  addItems(items: any): Observable<any> {
    const url = `${this.apiUrl}/cart/add`;
    return this.http.post(url, items)
  }

  removeItems(id : number): Observable<any>{
    const url = `${this.apiUrl}/cart/delet/${id}`;
    return this.http.delete<void>(url);

  }

  clearCart (): Observable<any>{
    const url = `${this.apiUrl}/cart/clear`;
    return this.http.delete<void>(url);

  }


}
