import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse, UserSummary } from '../models/domain';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'team-task-token';
  private readonly userKey = 'team-task-user';
  readonly user = signal<UserSummary | null>(this.loadUser());

  constructor(private readonly http: HttpClient) {}

  signup(payload: { name: string; email: string; password: string }) {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/signup`, payload).pipe(
      tap((response) => this.saveSession(response))
    );
  }

  login(payload: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, payload).pipe(
      tap((response) => this.saveSession(response))
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.user.set(null);
  }

  token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private saveSession(response: AuthResponse): void {
    localStorage.setItem(this.tokenKey, response.token);
    localStorage.setItem(this.userKey, JSON.stringify(response.user));
    this.user.set(response.user);
  }

  private loadUser(): UserSummary | null {
    const value = localStorage.getItem(this.userKey);
    return value ? JSON.parse(value) as UserSummary : null;
  }
}
