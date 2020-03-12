import React, { Component } from "react";
 
class Fullview extends Component {
  render() {
    return (
      <section>
        Fullview component.
        <p>article index: {this.props.match.params}</p>
      </section>
    );
  }
}
 
export default Fullview;