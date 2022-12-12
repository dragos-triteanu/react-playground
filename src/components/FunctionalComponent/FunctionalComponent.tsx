import React, { FC, useState } from "react";
import { MyReactFunctionalComponentStyle } from './FunctionalComponentStyle';

interface Props {
  cname: string;
  doClick: Function;
}

export const MyReactFunctionalComponent: FC<Props> = ({cname, doClick}) => {

  const [name, setName] = useState(cname);


  function handleNameChange() {
    setName(Math.random() + '');
    doClick(name);
  }

  return (
      <MyReactFunctionalComponentStyle>
        <div className="functionComponent">
          value={name}
          <button style={{height: '30px'}} onClick={() => handleNameChange()}>
            Change state
          </button>
        </div>
      </MyReactFunctionalComponentStyle>
  )
}
