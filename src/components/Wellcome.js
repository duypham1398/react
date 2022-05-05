import React, { Component } from "react";

export class Wellcome extends Component {
  render() {
    return (
      <div>
        <p>Wellcome {this.props.user.id} - {this.props.user.name}</p>
        <Logout />
      </div>
    );
  }
}

export default Wellcome;

class Logout extends Component {
  render() {
    return <a href="#">Logout</a>;
  }
}
