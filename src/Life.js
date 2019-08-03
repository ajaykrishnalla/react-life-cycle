import React, { Component } from "react";
import LifeProps from "./LifeProps";
import shallowCompare from "react-addons-shallow-compare"; // ES6

class Life extends Component {
  state = {
    name: "ajaykrishnareddy"
  };
  componentWillMount() {
    console.log(`component will mount-${this.state.name}`);
  }
  componentDidMount() {
    console.log(`component Did mount-${this.state.name}`);
  }

  shouldComponentUpdate(nextprops, nexState) {
    return shallowCompare(this, nextprops, nexState);
  }
  componentWillUpdate(nextprops, nexState) {
    // console.log(nexState);
    console.log("will update");
  }
  componentDidUpdate(prevprops, nextprops) {
    // console.log(nextprops);
    console.log("componentdidupdate");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  handleChange = () => {
    this.setState({ name: "bunny1" });
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.handleChange}>button</button>
        <LifeProps data={this.state} />
      </div>
    );
  }
}

export default Life;
