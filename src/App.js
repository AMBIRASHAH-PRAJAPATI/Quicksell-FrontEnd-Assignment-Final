import './App.css';
import HeadingTape from './components/HeadingTape';
import KanbanBoard from './components/KanbanBoard';

function App() {

  return (
    <div className="App">
      <KanbanBoard />
      <HeadingTape />
    </div>
  );
}

export default App;
