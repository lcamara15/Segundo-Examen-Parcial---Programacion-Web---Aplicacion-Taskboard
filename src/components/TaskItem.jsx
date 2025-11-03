import { useDispatch } from "react-redux";               
import { toggleTask, deleteTask } from "../redux/actions";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();                        

  return (
    // Clase "done" aplica estilos cuando la tarea está completada
    <li className={`item ${task.completada ? "done" : ""}`}>
      {/* Área izquierda: checkbox + título */}
      <label className="left">
        <input
          type="checkbox"
          checked={task.completada}                       // Refleja estado actual de la tarea
          onChange={() => dispatch(toggleTask(task.id))}  // Alterna con la tarea completada
        />
        <span className="title">{task.titulo}</span>
      </label>

      {/* Botones de acción */}
      <div className="actions">
        {/* Botón rápido para alternar (igual que el checkbox) */}
        <button
          className="btn btn-ghost"
          title={task.completada ? "Marcar como pendiente" : "Marcar como completada"}
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.completada ? "↩︎" : "✓"}
        </button>

        {/* Eliminar tarea por ID */}
        <button
          className="btn btn-danger"
          aria-label={`Eliminar ${task.titulo}`}
          onClick={() => dispatch(deleteTask(task.id))}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

