import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = "https://localhost:44490/api/";
  private constructedUri: string;
  constructor(protected service: HttpClient, @Inject('MODEL_NAME') protected modelName: string) {
    this.constructedUri = this.baseUrl + this.modelName;
  }

  public getAll<T>(){
    return this.service.get(this.constructedUri) as Observable<T[]>;
  }

  public getOne<T>(id:number) {
    return this.service.get(this.constructedUri + '/' + id) as Observable<T>;;
  }

  public addOne<T>(resource: T) {
    return this.service.post(this.constructedUri, resource) as Observable<T>;;
  }

  public updateOne<T>(id:number,resource: T) {
    return this.service.put(this.constructedUri + '/' + id, resource);
  }

  public deleteOne(id: number) {
    return this.service.delete(this.constructedUri + '/' + id);
  }
}
