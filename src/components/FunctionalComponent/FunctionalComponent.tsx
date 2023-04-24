import React, { FC, useContext, useEffect, useState } from "react";
import { MyReactFunctionalComponentStyle } from './FunctionalComponentStyle';
import useMediaQuery from '../shared/useMediaQuery';
import ThemeContext from '../../state/ThemeContext/ThemeContext';

interface Props {
  cname: string;
  doClick: Function;
}

export const MyReactFunctionalComponent: FC<Props> = ({cname, doClick}) => {

  /**
   * useState hook that makes used of a pair of state and state mutator
   */
  const [name, setName] = useState(cname);
  const [id, setId] = useState(Math.floor(Math.random() * 7) + 1);
  const width = useWindowWidth();
  /**
   * #CONTEXT Here we subscribe to the context using the useContext hook as an example
   * */
  const theme = useContext(ThemeContext);


  /**
   * useEffect is triggered each time the state (or a piece of it is changed)
   * It's a sort of componentDidMount and componentDidUpdate (similar to ngOnChanges)
   * With the deps parameter, you can make it get called only if changes occur to the following pieces of state
   */
  useEffect(() => {
    document.title = name + id;
  }, [id])


  /**
   * Functional Components return what class components use in their .render() method
   */
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
      <MyReactFunctionalComponentStyle>
        <div className="functionComponent">
          {name} is {id}
          <h1>Functional Component</h1>
          <p>{isMobile ? 'mobile' : 'web'}</p>
          <button style={{height: '30px'}}
                  className={(theme.isDark ? 'dark' : 'light')}
                  onClick={() => handleNameChange(Math.floor(Math.random() * 7) + 1)}>
            Change state
          </button>
          <p>{width}</p>
        </div>
      </MyReactFunctionalComponentStyle>
  )

  function handleNameChange(newId: number) {
    setId(newId);
    doClick(name, `${name} is ${newId}`);
  }

}

/**
 * Custom hook
 * A custom hook is a function that can be used as part of the functional component
 * As a convention, is should begin with 'use'.
 * The state that exists in a hook is practically completely isolated
 */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  /**
   * useEffect has the convention that if the effect returns a function, that function will be executed after the effect
   * This is especially useful for cleanup (un-subscriptions etc).
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleResize(e: any) {
    setWidth(e.target.innerWidth);
  }

  return width;
}
