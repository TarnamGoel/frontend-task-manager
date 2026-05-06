import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dashboard, Project, TaskItem, TaskPriority, TaskStatus, UserSummary } from '../models/domain';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  dashboard() {
    return this.http.get<Dashboard>(`${environment.apiUrl}/dashboard`);
  }

  users() {
    return this.http.get<UserSummary[]>(`${environment.apiUrl}/users`);
  }

  projects() {
    return this.http.get<Project[]>(`${environment.apiUrl}/projects`);
  }

  createProject(payload: { name: string; description: string }) {
    return this.http.post<Project>(`${environment.apiUrl}/projects`, payload);
  }

  addMember(projectId: string, userId: string) {
    return this.http.post<Project>(`${environment.apiUrl}/projects/${projectId}/members`, { userId });
  }

  removeMember(projectId: string, userId: string) {
    return this.http.delete<Project>(`${environment.apiUrl}/projects/${projectId}/members/${userId}`);
  }

  tasks(projectId: string) {
    return this.http.get<TaskItem[]>(`${environment.apiUrl}/projects/${projectId}/tasks`);
  }

  createTask(projectId: string, payload: {
    title: string;
    description: string;
    dueDate: string;
    priority: TaskPriority;
    assigneeId: string | null;
  }) {
    return this.http.post<TaskItem>(`${environment.apiUrl}/projects/${projectId}/tasks`, payload);
  }

  updateTask(taskId: string, payload: {
    title?: string;
    description?: string;
    dueDate?: string;
    priority?: TaskPriority;
    status?: TaskStatus;
    assigneeId?: string | null;
  }) {
    return this.http.put<TaskItem>(`${environment.apiUrl}/tasks/${taskId}`, payload);
  }

  updateStatus(taskId: string, status: TaskStatus) {
    return this.http.patch<TaskItem>(`${environment.apiUrl}/tasks/${taskId}/status`, { status });
  }

  deleteTask(taskId: string) {
    return this.http.delete<void>(`${environment.apiUrl}/tasks/${taskId}`);
  }
}
