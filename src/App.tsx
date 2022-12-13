import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactClassComponent from './components/ClassComponent/ClassComponent';
import { MyReactFunctionalComponent } from './components/FunctionalComponent/FunctionalComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CLASS = 'Class';
const FUNCTIONAL = 'Functional';

function App() {
  return (
      <div className="App">
        <ToastContainer/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="App-body">
          <MyReactClassComponent name={CLASS}
                                 doClick={onDoClick}/>

          <MyReactFunctionalComponent cname={FUNCTIONAL}
                                      doClick={onDoClick}/>
        </div>
      </div>
  );
}

function onDoClick(name: string, message: string) {

  switch (name) {
    case CLASS:
      toast(message, {type: 'info', icon: false, progressStyle: {backgroundColor: 'black'}});
      break;
    case FUNCTIONAL:
      toast(message, {type: 'success', icon: false});
      break;
  }
}

export default App;
