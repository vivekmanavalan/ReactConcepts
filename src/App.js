import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import MemoCounter from './Memo/MemoCounter';
import ParentComponent from './Callback/ParentComponent';

function App() {
  return (
    <div className="App">
      <TodoList />
      <MemoCounter />
      <p>..............................</p><br></br>
      <ParentComponent />
    </div>
  );
}

export default App;
