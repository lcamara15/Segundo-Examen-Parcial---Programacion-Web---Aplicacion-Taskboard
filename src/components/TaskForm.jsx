import { useDispatch } from "react-redux";      // Para enviar acciones al store
import { useState } from "react";               // Estado local del input
import { addTask } from "../redux/actions";     // Acción: agregar tarea

export default function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const dispatch = useDispatch();               

  // Se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();                         // Evita recargar la página
    const t = titulo.trim();                    // Limpia los espacios
    if (!t) return;                          
    dispatch(addTask(t));                       // Envía acción ADD_TASK
    setTitulo("");                              // Limpia el input
  };

  return (
    // onSubmit dispara handleSubmit al presionar Enter o el botón
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        name="titulo"
        value={titulo}                          // Valor vinculado al estado
        onChange={(e) => setTitulo(e.target.value)} // Actualiza estado al escribir
        placeholder="Escribe el nombre de una tarea y presiona el botón para añadirla a la lista"
        aria-label="Nueva tarea"
      />
      <button className="btn btn-primary" type="submit">Agregar</button>
    </form>
  );
}


