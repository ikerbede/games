import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  handId: number | null = null;
  redirectUrl = '';

  constructor(private readonly http: HttpClient) {}

  login(name: string, password: string): Observable<number> {
    // FIXME: pass mus-api-url via lib forRoot
    // return this.http.post<number>(`${environment.API_URL}/login`, {name, password})
    //  .pipe(tap(handId => this.handId = handId));
    return of(9999);
  }

  logout(): void {
    this.handId = null;
  }
}
