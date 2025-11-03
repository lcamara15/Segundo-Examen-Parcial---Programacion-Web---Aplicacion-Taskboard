import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actions";

const initialState = { tasks: [] };

// Reducer: Decide cómo cambia el estado según la acción
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      // Agrega al final
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      // Alterna "completada" por ID
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completada: !t.completada } : t
        ),
      };

    case DELETE_TASK:
      // Quita por ID
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload) };

    default:
      // Sin ningún tipo de cambio
      return state;
  }
}

