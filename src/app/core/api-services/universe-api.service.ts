import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@app/core/api-services/base-api.service';
import { Universe } from '@app/models/universe';
import { Star } from '@app/models/star';
import { Observable } from 'rxjs';

@Injectable()
export class UniverseApiService extends BaseApiService<Universe> {

  constructor(http: HttpClient) {
    super(http, '/api/universe');
  }

  public getByIdStars(id: string): Observable<Star> {
    return this._http.get<Star>(`${this._baseUrl}${this._endpointName}/${id}/stars`);
  }
}
