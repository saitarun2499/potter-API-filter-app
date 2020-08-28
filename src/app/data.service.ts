import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http1: HttpClient) { }

  public Harry(){
     return this.http1.get('https://www.potterapi.com/v1/characters?key=$2a$10$sjZKWyLCgLDC7Vk1iMkNhepRbA48wseVQaPDa44TmcdLlVOY1UIki');
   }
  // public filterHouse(id){
  //   return this.http1.get(`https://www.potterapi.com/v1/houses?key=$2a$10$sjZKWyLCgLDC7Vk1iMkNhepRbA48wseVQaPDa44TmcdLlVOY1UIki&house=${'id'}`);
  // }
   
}
