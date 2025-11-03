// Listado de tareas
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useSelector((s) => s.tasks); // lee del store

  if (tasks.length === 0) {
    return <p style={{ opacity: 0.8, marginTop: 8 }}>No hay tareas. Agrega la primera.</p>;
  }

  // Incompletas primero, completadas al final
  const visibles = [...tasks].sort((a, b) =>
    a.completada === b.completada ? 0 : a.completada ? 1 : -1
  );

  return (
    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 10, marginTop: 8 }}>
      {visibles.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  );
}
