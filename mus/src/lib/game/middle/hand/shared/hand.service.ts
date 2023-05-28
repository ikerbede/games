import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hand } from './hand.model';

const environment = {API_URL: ''};

@Injectable({providedIn: 'root'})
export class HandService {

  constructor(private readonly http: HttpClient) {}

  getHand(id: number): Observable<Hand> {
    return this.http.get<Hand>(`${environment.API_URL}/${id}`);
  }
}
