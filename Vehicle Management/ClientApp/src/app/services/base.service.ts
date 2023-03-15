import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = "https://localhost:44490/api/";
  constructor(protected service: HttpClient, @Inject('MODEL_NAME') protected modelName:string) {}

  public getAll<T>(): Observable<T[]> {
    return this.service.get(this.baseUrl + this.modelName) as Observable<T[]>;
  }

  public getOne(id:number) {
    return this.service.get(this.baseUrl + this.modelName + '/' + id);
  }

  public addOne<T>(resource:T) {
    return this.service.post(this.baseUrl + this.modelName, resource);
  }

  public updateOne<T>(resource: T) {
    return this.service.put(this.baseUrl + this.modelName, resource);
  }

  public deleteOne(id: number) {
    return this.service.delete(this.baseUrl + this.modelName + '/' + id);
  }
}
