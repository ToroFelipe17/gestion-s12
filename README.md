# Gestión de Tareas - Evaluación S12 📝

Proyecto desarrollado en **Angular 20** como parte de la **Evaluación S12** del curso *Programación Front-End*.  
El objetivo fue construir un sistema de gestión de tareas con persistencia en **localStorage**, aplicando buenas prácticas de modularidad, componentes reutilizables y diseño responsivo.

---

## 🎯 Objetivos alcanzados
- Creación de un proyecto Angular con `ng new gestion-s12`.
- Desarrollo de componentes:
  - `AddTaskComponent`: permite ingresar nuevas tareas.
  - `TasksListComponent`: muestra las tareas registradas y habilita su eliminación.
- Implementación de un servicio (`task.service.ts`) para gestionar las tareas y almacenarlas en `localStorage`.
- Persistencia: las tareas permanecen en memoria al refrescar la página.
- Estilos personalizados con animaciones y gradientes modernos.
- Evidencias visuales documentadas en la carpeta [`/docs`](./docs/ANEXO.md).

---

## 🚀 Ejecución del proyecto

1. Clonar el repositorio:  
   `git clone https://github.com/ToroFelipe17/gestion-s12.git`  
   `cd gestion-s12`

2. Instalar dependencias:  
   `npm install`

3. Levantar el servidor local:  
   `ng serve`

4. Abrir navegador en:  
   [http://localhost:.../](http://localhost:.../)

---

## 📂 Estructura relevante del proyecto

gestion-s12/
  ├── src/
  │   ├── app/
  │   │   ├── add-task/          # Componente para agregar tareas
  │   │   ├── tasks-list/        # Componente para listar y eliminar tareas
  │   │   ├── services/
  │   │   │   └── task.service.ts  # Lógica central: persistencia en localStorage
  │   │   ├── app.component.html   # Vista principal con integración de componentes
  │   │   └── app.component.css    # Estilos principales
  │   │
  │   └── assets/               # Recursos estáticos (imágenes, íconos, etc.)
  │
  ├── docs/
  │   ├── ANEXO.md              # Evidencias con pantallazos y explicaciones
  │   └── /images/              # Capturas de instalación y pruebas
  │
  └── README.md


---

## 📸 Evidencias

Las capturas de pantalla con explicaciones detalladas están disponibles en el siguiente enlace:  

👉 [Ver Anexo con Evidencias](https://github.com/ToroFelipe17/gestion-s12/blob/main/docs/ANEXO.md)

Incluyen:  
1. Instalación de Angular y creación del proyecto.  
2. Generación de componentes (`tasks-list`, `add-task`).  
3. Ejecución del servidor (`ng serve`).  
4. Creación y uso del servicio `task.service.ts`.  
5. Persistencia en `localStorage`.  
6. Estilos y mejoras visuales aplicadas.  

---

## 📚 Recursos utilizados
- Angular CLI v20.2.1  
- TypeScript para tipado y lógica  
- CSS3 con gradientes, animaciones y transiciones  
- localStorage API para persistencia  

---

## 👨‍💻 Autor
**Felipe Toro**  
Estudiante de Ingeniería Informática  
Universidad Autónoma de Chile – 2025
