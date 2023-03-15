import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends BaseService {

  constructor(protected service: HttpClient) {
    super(service, "Models");
  }
}
