import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    console.log("in the constructor");
    console.log("-----------");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  //captures properties before re-rendering component
  //return object gets sents to componentDidUpdate as snapshot
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  render() {
    console.log("in the render");
    console.log("-----------");
    return (
      <div>
        {this.state.initializing ? <p>Initializing...</p> : null}

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }

  //runs after constructor and before render
  static getDerivedStateFromProps(props, state) {
    console.log("getting derived state from props");
    console.log("-----------");
    if (props.seed && state.seed !== props.seed) {
      return {
        counter: props.seed,
        seed: props.seed,
      };
    }
    return null;
  }

  //only used when element gets put onto the DOM, NOT on every render
  componentDidMount() {
    console.log("component did mount");
    console.log("--------");
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
    console.log("------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("DO NOT RENDER");
      console.log("-----------");
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
    console.log("-----------");
  }

  //handles errors
  componentDidCatch(error, info) {
    console.log("component did catch");
    console.log("-----------");
  }
}

export default Counter;
