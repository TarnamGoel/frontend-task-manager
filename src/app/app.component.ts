import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './core/api.service';
import { AuthService } from './core/auth.service';
import { Dashboard, Project, TaskItem, TaskPriority, TaskStatus, UserSummary } from './models/domain';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly user = this.auth.user;
  readonly projects = signal<Project[]>([]);
  readonly tasks = signal<TaskItem[]>([]);
  readonly users = signal<UserSummary[]>([]);
  readonly dashboard = signal<Dashboard | null>(null);
  readonly selectedProjectId = signal<string>('');
  readonly authMode = signal<'login' | 'signup'>('login');
  readonly message = signal('');
  readonly selectedProject = computed(() =>
    this.projects().find((project) => project.id === this.selectedProjectId()) ?? null
  );
  readonly isAdmin = computed(() => this.selectedProject()?.adminId === this.user()?.id);

  readonly authForm = { name: '', email: '', password: '' };
  readonly projectForm = { name: '', description: '' };
  readonly memberForm = { userId: '' };
  readonly taskForm: {
    title: string;
    description: string;
    dueDate: string;
    priority: TaskPriority;
    assigneeId: string;
  } = { title: '', description: '', dueDate: '', priority: 'MEDIUM', assigneeId: '' };

  readonly statuses: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'DONE'];
  readonly priorities: TaskPriority[] = ['LOW', 'MEDIUM', 'HIGH'];

  constructor(readonly auth: AuthService, private readonly api: ApiService) {}

  ngOnInit(): void {
    if (this.user()) {
      this.loadWorkspace();
    }
  }

  submitAuth(): void {
    const request = this.authMode() === 'login'
      ? this.auth.login({ email: this.authForm.email, password: this.authForm.password })
      : this.auth.signup(this.authForm);

    request.subscribe({
      next: () => {
        this.message.set('');
        this.loadWorkspace();
      },
      error: (error) => {
        const message = error.status === 0
          ? 'Cannot reach the backend. Check that Spring Boot is running and CORS allows this frontend URL.'
          : error.error?.message ?? 'Authentication failed';
        this.message.set(message);
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.projects.set([]);
    this.tasks.set([]);
    this.dashboard.set(null);
  }

  loadWorkspace(): void {
    this.api.projects().subscribe((projects) => {
      this.projects.set(projects);
      if (!this.selectedProjectId() && projects.length) {
        this.selectProject(projects[0].id);
      }
    });
    this.api.users().subscribe((users) => this.users.set(users));
    this.refreshDashboard();
  }

  refreshDashboard(): void {
    this.api.dashboard().subscribe((dashboard) => this.dashboard.set(dashboard));
  }

  selectProject(projectId: string): void {
    this.selectedProjectId.set(projectId);
    this.api.tasks(projectId).subscribe((tasks) => this.tasks.set(tasks));
  }

  createProject(): void {
    this.api.createProject(this.projectForm).subscribe((project) => {
      this.projectForm.name = '';
      this.projectForm.description = '';
      this.projects.update((projects) => [project, ...projects]);
      this.selectProject(project.id);
      this.refreshDashboard();
    });
  }

  addMember(): void {
    const project = this.selectedProject();
    if (!project || !this.memberForm.userId) {
      return;
    }
    this.api.addMember(project.id, this.memberForm.userId).subscribe((updated) => {
      this.memberForm.userId = '';
      this.replaceProject(updated);
    });
  }

  removeMember(userId: string): void {
    const project = this.selectedProject();
    if (!project) {
      return;
    }
    this.api.removeMember(project.id, userId).subscribe((updated) => this.replaceProject(updated));
  }

  createTask(): void {
    const project = this.selectedProject();
    if (!project) {
      return;
    }
    this.api.createTask(project.id, {
      ...this.taskForm,
      assigneeId: this.taskForm.assigneeId || null
    }).subscribe((task) => {
      this.taskForm.title = '';
      this.taskForm.description = '';
      this.taskForm.dueDate = '';
      this.taskForm.priority = 'MEDIUM';
      this.taskForm.assigneeId = '';
      this.tasks.update((tasks) => [task, ...tasks]);
      this.refreshDashboard();
    });
  }

  updateStatus(task: TaskItem, status: TaskStatus): void {
    this.api.updateStatus(task.id, status).subscribe((updated) => {
      this.replaceTask(updated);
      this.refreshDashboard();
    });
  }

  deleteTask(taskId: string): void {
    this.api.deleteTask(taskId).subscribe(() => {
      this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
      this.refreshDashboard();
    });
  }

  statusLabel(status: TaskStatus): string {
    return status.replace('_', ' ');
  }

  private replaceProject(project: Project): void {
    this.projects.update((projects) => projects.map((item) => item.id === project.id ? project : item));
  }

  private replaceTask(task: TaskItem): void {
    this.tasks.update((tasks) => tasks.map((item) => item.id === task.id ? task : item));
  }
}
