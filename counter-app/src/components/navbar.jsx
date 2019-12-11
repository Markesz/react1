import React, { Component } from "react";
import Counters from "./counters";

//Stateless functional comp

class Navbar extends Component {
  getClasses = () => {
    let className = "badge badge-pill badge-";

    return (className += this.props.numbers === 0 ? "danger" : "secondary");
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className={this.getClasses()}>{this.props.numbers}</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
