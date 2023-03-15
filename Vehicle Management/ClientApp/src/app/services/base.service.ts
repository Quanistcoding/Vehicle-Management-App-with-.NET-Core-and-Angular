import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = "https://localhost:44490/api/";
  constructor(protected service: HttpClient, @Inject('MODEL_NAME') protected modelName:string) {}

  public getAll() {
    return this.service.get(this.baseUrl + this.modelName);
  }

}
