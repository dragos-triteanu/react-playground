import React from "react";
import './ClassComponentStyle.scss';

interface Props {
  name: string;
  doClick: Function;
}

interface State {
  name: string;
}

export default class MyReactClassComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      name: props.name || 'default'
    }
  }

  handleNameChange(newName: string) {
    this.setState({
      name: newName
    });
    this.props.doClick(this.state.name);
  }

  render() {
    return (
        <div className="classComponent">
          value= {this.state.name}
          <button style={{height: '30px'}}
                  onClick={() => this.handleNameChange(Math.random().toString())}>
            Change state
          </button>
        </div>

    )
  }
}
