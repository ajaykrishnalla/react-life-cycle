import React, { Component } from "react";

class LifeProps extends Component {
  componentWillReceiveProps(nextprops) {
    console.log(`nextprops:::${nextprops.data.name}`);
  }
  render() {
    return (
      <div>
        <h1>Name: {this.props.data.name}</h1>
      </div>
    );
  }
}

export default LifeProps;
