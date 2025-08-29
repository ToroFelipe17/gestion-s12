import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTask {
  nueva: string = '';
  @Output() nuevaTarea = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  agregar() {
    const texto = this.nueva?.trim();
    if (texto) {
      // Guardar en el servicio y notificar al padre
      this.taskService.addTask(texto);
      this.nuevaTarea.emit(texto);
      this.nueva = '';
    }
  }
}
