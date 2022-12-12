import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactClassComponent from './components/ClassComponent/ClassComponent';
import { MyReactFunctionalComponent } from './components/FunctionalComponent/FunctionalComponent';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="App-body">
          <MyReactClassComponent name={'noome 1'}
                                 doClick={onDoClick}/>

          <MyReactFunctionalComponent cname={'noome 2'}
                                      doClick={onDoClick}/>
        </div>
      </div>
  );
}

function onDoClick(name: string) {
  alert(name);
}

export default App;
