export type UserRole = 'ADMIN' | 'MEMBER';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface UserSummary {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthResponse {
  token: string;
  user: UserSummary;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  adminId: string;
  members: UserSummary[];
  createdAt: string;
}

export interface TaskItem {
  id: string;
  projectId: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee: UserSummary | null;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Dashboard {
  totalTasks: number;
  tasksByStatus: Record<TaskStatus, number>;
  tasksPerUser: Array<{ userId: string; name: string; email: string; taskCount: number }>;
  overdueTasks: number;
}
