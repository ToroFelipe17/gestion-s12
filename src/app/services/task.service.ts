import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tareas';
  private memoryTasks: string[] = [];

  private hasLocalStorage(): boolean {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch {
      return false;
    }
  }

  getTasks(): string[] {
    if (this.hasLocalStorage()) {
      const data = window.localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
    return [...this.memoryTasks];
  }

  private saveTasks(tasks: string[]): void {
    if (this.hasLocalStorage()) {
      window.localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    } else {
      this.memoryTasks = [...tasks];
    }
  }

  addTask(task: string): void {
    if (!task || !task.trim()) return;
    const tasks = this.getTasks();
    tasks.push(task.trim());
    this.saveTasks(tasks);
  }

  deleteTask(index: number): void {
    const tasks = this.getTasks();
    if (index < 0 || index >= tasks.length) return;
    tasks.splice(index, 1);
    this.saveTasks(tasks);
  }
}