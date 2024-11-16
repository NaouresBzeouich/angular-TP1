import {Injectable, inject, WritableSignal, signal} from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  public isAuth: WritableSignal<boolean> = signal<boolean>(this.isTokenAvailable());

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
      return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isTokenAvailable(): boolean {
    return !!localStorage.getItem('token');
  }

  isAuthenticated(){
    return this.isAuth.asReadonly()() ;
  }

  logout() {
      this.isAuth.set(false);
    localStorage.removeItem('token');
  }
}
