import React from "react";
import './ClassComponentStyle.scss';
import useMediaQuery from '../shared/useMediaQuery';

/**
 * Represents the prop signature of the react component
 * <MyReactClassComponent name={} doClick={} />
 */
interface Props {
  name: string;
  doClick: Function;
}

/**
 * Represents the state of the component
 */
interface State {
  id: number;
  name: string;
  width: number;
  isMobile: boolean;
}

export default class MyReactClassComponent extends React.Component<Props, State> {

  /**
   *  #1 Traditional TS constructor
   *  Called when the object is created
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 7) + 1,
      name: props.name || 'default',
      width: window.innerWidth,
      isMobile: window.matchMedia("(max-width: 768px)").matches
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleMediaQuery = this.handleMediaQuery.bind(this);
  }

  /**
   *  #2 Sort of onInit with a funky name
   *  Called after the component is rendered.
   *  Side effects here can cause a render loop
   */
  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener('resize', this.handleResize);
    window.matchMedia("(max-width: 768px)").addEventListener('change', this.handleMediaQuery);
  }

  /**
   *  #3 Sort of onOnChanges with a funky name
   *  Called after the component is rendered.
   *  Side effects here can cause a render loop
   */
  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.id;
  }

  /**
   *  #4 Sort of onDestroy with a funky name
   *  Called when the component will be terminated
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.matchMedia("(max-width: 768px)").removeEventListener('change', this.handleMediaQuery);
  }

  /**
   *  #5 Rendering method (like the name suggests)
   *  Should return a single react element
   */
  render() {
    return (
        <div className="classComponent">
          {this.state.name} is {this.state.id}
          <h1>Class Component</h1>
          <p>{this.state.isMobile ? 'mobile' : 'web'}</p>
          <button style={{height: '30px'}}
                  onClick={() => this.handleClick(Math.floor(Math.random() * 7) + 1)}>
            Change state
          </button>
          <p>{this.state.width}</p>
        </div>
    )
  }

  /**
   * Handlers
   */
  handleClick(newId: number) {
    this.setState({
      id: newId
    });
    this.props.doClick(this.state.name, `${this.state.name} is ${newId}`);
  }

  handleResize(e: any) {
    this.setState({
      width: e.target.innerWidth
    })
  }

  handleMediaQuery(e: any) {
    this.setState({
      isMobile: e.matches
    })
    console.log(this.state);
  }
}
