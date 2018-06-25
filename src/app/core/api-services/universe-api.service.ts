import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@app/core/api-services/base-api.service';
import { Universe } from '@app/models/universe';

@Injectable()
export class UniverseApiService extends BaseApiService<Universe> {

  constructor(http: HttpClient) {
    super(http, '/api/universe');
  }
}
