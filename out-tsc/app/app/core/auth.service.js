import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    constructor(http) {
        this.http = http;
        this.tokenKey = 'team-task-token';
        this.userKey = 'team-task-user';
        this.user = signal(this.loadUser());
    }
    signup(payload) {
        return this.http.post(`${environment.apiUrl}/auth/signup`, payload).pipe(tap((response) => this.saveSession(response)));
    }
    login(payload) {
        return this.http.post(`${environment.apiUrl}/auth/login`, payload).pipe(tap((response) => this.saveSession(response)));
    }
    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.user.set(null);
    }
    token() {
        return localStorage.getItem(this.tokenKey);
    }
    saveSession(response) {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.userKey, JSON.stringify(response.user));
        this.user.set(response.user);
    }
    loadUser() {
        const value = localStorage.getItem(this.userKey);
        return value ? JSON.parse(value) : null;
    }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=auth.service.js.map