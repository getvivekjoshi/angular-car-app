import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarById(carId: number) {
    throw new Error("Method not implemented.");
  }

  
  
  constructor(private http: HttpClient) {
   }

  getCars():Observable<any>{
   return this.http.get('http://localhost:3000/cars');
  }
addCar(car: Car):Observable<any>{
return this.http.post('http://localhost:3000/cars', car);
}
deleteCar(carId:number){
  return this.http.delete(`http://localhost:3000/cars/${carId}`);
}
editCar(car: Car){
  return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
}
}
