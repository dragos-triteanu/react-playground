import styled from 'styled-components';

const MyReactFunctionalComponentStyle = styled.div(props => {
  const size = 400; // easier to use Number instead of String for calculations
  return `
   .functionComponent {
      width: ${size}px;
      height: ${size}px;
      background-color: green;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      
      button {
      border: 1px solid yellow;
        
      }
      
      button.dark {
        background-color: #131111;
        color: white;  
      }
}`
});

export { MyReactFunctionalComponentStyle } ;
