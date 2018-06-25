import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../../models/document';

import { environment } from 'environments/environment';

export abstract class BaseApiService<T extends Document> {

  protected _baseUrl: string = environment.apiBaseUrl;

  constructor(
    protected _http: HttpClient,
    protected _endpointName: string) { }

  public getByIds(ids: string[]): Observable<T[]> {
    return this._http.post<T[]>(`${this._baseUrl}${this._endpointName}/getByIds`, ids);
  }

  public getById(id: string): Observable<T> {
    return this._http.get<T>(`${this._baseUrl}${this._endpointName}/${id}`);
  }

  public get(): Observable<T[]> {
    return this._http.get<T[]>(`${this._baseUrl}${this._endpointName}`);
  }

  public insert(document: T): Observable<T> {
    return this._http.post<T>(this._baseUrl + this._endpointName, document);
  }

  public deleteById(id: string) {
    return this._http.delete(`${this._baseUrl}${this._endpointName}/${id}`, { responseType: 'text' });
  }


  
}
