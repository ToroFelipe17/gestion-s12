import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list.html',
  styleUrls: ['./tasks-list.css']
})
export class TasksListComponent implements OnInit {
  @Input() tareas: string[] = [];
  @Output() eliminar = new EventEmitter<number>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Si no se reciben tareas desde el padre, las cargamos desde el servicio
    if (!this.tareas || this.tareas.length === 0) {
      this.loadTasks();
    }
  }

  loadTasks(): void {
    this.tareas = this.taskService.getTasks();
  }

  deleteTask(index: number): void {
    // Eliminar en el servicio, recargar la lista y notificar al padre
    this.taskService.deleteTask(index);
    this.loadTasks();
    this.eliminar.emit(index);
  }
}