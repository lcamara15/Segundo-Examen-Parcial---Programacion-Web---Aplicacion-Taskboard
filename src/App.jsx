import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function Header() {
  const tasks = useSelector((s) => s.tasks);
  const total = tasks.length;
  const completadas = tasks.filter((t) => t.completada).length;

  return (
    <div className="top">
      <div style={{display:"flex",gap:12,alignItems:"baseline"}}>
        <h1 className="title">TaskBoard</h1>
        <div className="badges">
          <span className="badge">Total: {total}</span>
          <span className="badge">Completadas: {completadas}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="card">
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}






