import React, { FC, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyReactClassComponent from './components/ClassComponent/ClassComponent';
import { MyReactFunctionalComponent } from './components/FunctionalComponent/FunctionalComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeContext from './state/ThemeContext/ThemeContext';

const CLASS = 'Class';
const FUNCTIONAL = 'Functional';

// An example of a context

interface Props {
  isDark?: boolean;
}


export const App: FC<Props> = ({isDark = false}) => {
  const [dark, setDark] = useState(isDark);

  const toggleTheme = () => {
    const newDark = !dark;
    console.log('new theme', newDark);
    setDark(newDark)
    return newDark;
  };

  return (
      // Here we define the context as a provider, so that all components in its scope can get it's state
      <ThemeContext.Provider value={{isDark: dark}}>
        <div className="App">
          <ToastContainer/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <button style={{height: '30px'}}
                    onClick={() => toggleTheme()}>
              Change theme
            </button>
          </header>
          <div className={"App-body " + (dark ? 'dark' : 'light')}>
            <MyReactClassComponent name={CLASS}
                                   doClick={onDoClick}/>

            <MyReactFunctionalComponent cname={FUNCTIONAL}
                                        doClick={onDoClick}/>
          </div>
        </div>
      </ThemeContext.Provider>
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
