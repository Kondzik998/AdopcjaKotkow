import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../Model/property';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get('data/properties.json');
  }
}
