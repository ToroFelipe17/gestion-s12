import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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

  // Obtener todas las tareas desde localStorage
  getTasks(): string[] {
    if (this.hasLocalStorage()) {
      const data = window.localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
    return [...this.memoryTasks];
  }

  // Guardar todas las tareas en localStorage
  private saveTasks(tasks: string[]): void {
    if (this.hasLocalStorage()) {
      window.localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    } else {
      this.memoryTasks = [...tasks];
    }
  }

  // Agregar nueva tarea
  addTask(task: string): void {
    if (!task || !task.trim()) return;
    const tasks = this.getTasks();
    tasks.push(task.trim());
    this.saveTasks(tasks);
  }

  // Eliminar tarea por índice
  deleteTask(index: number): void {
    const tasks = this.getTasks();
    if (index < 0 || index >= tasks.length) return;
    tasks.splice(index, 1);
    this.saveTasks(tasks);
  }
}
