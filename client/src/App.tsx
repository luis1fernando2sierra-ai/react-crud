import { TaskList } from './components/TaskList.js';

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Gestor de Tareas — Fullstack</h1>
      <TaskList />
    </div>
  );
}