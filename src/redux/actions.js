// Tipos de acción
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Crea una acción para agregar
export const addTask = (titulo) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now() + Math.floor(Math.random() * 1000), // ID simple
    titulo,
    completada: false,
  },
});

// Crea una acción para alternar la tarea completada
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

// Crea una acción para eliminar
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
