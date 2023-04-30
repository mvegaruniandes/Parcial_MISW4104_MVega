import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoffeeList } from './CoffeeList';

@Injectable({
  providedIn: 'root',
})
export class CoffeeListService {
  private apiUrl = environment.appUrl + '202212_MISW4104_Grupo3.json';
  constructor(private http: HttpClient) {}

  getCoffeeList(): Observable<CoffeeList[]> {
    return this.http.get<CoffeeList[]>(this.apiUrl);
  }
}
