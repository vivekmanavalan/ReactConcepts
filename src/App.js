import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoList from './TodoList';
import MemoCounter from './Memo/MemoCounter';
import ParentComponent from './Callback/ParentComponent';
import { useState } from 'react';
import ClassContext from './Context/ClassContext';
import FunctionalContext from './Context/FunctionalContext';

export const Login = React.createContext();

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setName] = useState();

  const toggleLogin = () => {
    console.log('login', isLogin);
    setIsLogin(prevLogin => !prevLogin);
  }

  const nameHandler = (e) => {
    console.log(e);
    setName(e.target.value);
  }
  return (
    <div className="App">
      {/* <TodoList />
      <MemoCounter />
      <p>..............................</p><br></br>
      <ParentComponent />
      <p>............................</p><br></br> */}
      <h3>Use Context concept</h3>
      <Login.Provider value={{isLogin, userName}}>
        Name: <input type={'text'} onChange={nameHandler} />
        <button onClick={toggleLogin}>Click to toggle login</button>
        <ClassContext />
        <FunctionalContext />
      </Login.Provider>
    </div>
  );
}

export default App;
