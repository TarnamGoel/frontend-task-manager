import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApiService {
    constructor(http) {
        this.http = http;
    }
    dashboard() {
        return this.http.get(`${environment.apiUrl}/dashboard`);
    }
    users() {
        return this.http.get(`${environment.apiUrl}/users`);
    }
    projects() {
        return this.http.get(`${environment.apiUrl}/projects`);
    }
    createProject(payload) {
        return this.http.post(`${environment.apiUrl}/projects`, payload);
    }
    addMember(projectId, userId) {
        return this.http.post(`${environment.apiUrl}/projects/${projectId}/members`, { userId });
    }
    removeMember(projectId, userId) {
        return this.http.delete(`${environment.apiUrl}/projects/${projectId}/members/${userId}`);
    }
    tasks(projectId) {
        return this.http.get(`${environment.apiUrl}/projects/${projectId}/tasks`);
    }
    createTask(projectId, payload) {
        return this.http.post(`${environment.apiUrl}/projects/${projectId}/tasks`, payload);
    }
    updateTask(taskId, payload) {
        return this.http.put(`${environment.apiUrl}/tasks/${taskId}`, payload);
    }
    updateStatus(taskId, status) {
        return this.http.patch(`${environment.apiUrl}/tasks/${taskId}/status`, { status });
    }
    deleteTask(taskId) {
        return this.http.delete(`${environment.apiUrl}/tasks/${taskId}`);
    }
    static { this.ɵfac = function ApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApiService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=api.service.js.map