import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddTask } from './add-task/add-task';
import { TasksListComponent } from './tasks-list/tasks-list';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddTask, TasksListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'Gestión de Tareas - Evaluación S12';
  tareas: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // cargar desde servicio al iniciar
    this.tareas = this.taskService.getTasks();
  }

  agregarTarea(nueva: string) {
    // AddTask ya agrega en el servicio; aquí solo recargamos la lista desde el servicio
    this.tareas = this.taskService.getTasks();
  }

  eliminarTarea(index: number) {
    // eliminar via servicio y recargar
    this.taskService.deleteTask(index);
    this.tareas = this.taskService.getTasks();
  }
}
