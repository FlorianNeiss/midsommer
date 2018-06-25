import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@app/core/api-services/base-api.service';
import { Star } from '@app/models/star';

@Injectable()
export class StarApiService extends BaseApiService<Star> {

  constructor(http: HttpClient) {
    super(http, '/api/star');
  }
}
