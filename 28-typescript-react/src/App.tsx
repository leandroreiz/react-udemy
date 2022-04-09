import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const TODOS_DUMMY = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <div className="App">
      <Todos items={TODOS_DUMMY} />
    </div>
  );
}

export default App;
