import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../Model/property';

@Injectable({
  providedIn: 'root'
})
export class CatService {

constructor(private http: HttpClient) { }

  getAllProperties(CzyAdoptowany?: number): Observable<Property[]>{
  return 1;
  }
}
