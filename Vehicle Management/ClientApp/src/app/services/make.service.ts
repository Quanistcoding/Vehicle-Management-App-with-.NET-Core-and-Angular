import { Injectable, Inject } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MakeService extends BaseService{

  constructor(protected service: HttpClient) {
    super(service, "Makes");
  }
}
