# TaskBoard

App de **lista de tareas** con **React + Redux**.
Permite **agregar**, **marcar como completadas** y **eliminar** tareas.
Muestra las completadas **al final** y un **contador**.

# Instalar y ejecutar
```bash
npm install
npm run dev

Debe abrirse la URL que imprime Vite (ej: http://localhost:5173)

# Estructura:

src/
  components/   # TaskForm, TaskItem, TaskList
  redux/        # actions, reducer, store (Redux Toolkit)
  styles.css
  App.jsx
  main.jsx

# Notas:

- Acciones: ADD_TASK, TOGGLE_TASK, DELETE_TASK.
- Estado global en Redux; UI simple con CSS.
