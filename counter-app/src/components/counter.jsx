import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-danger btn-sm"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm btn-m2"
          style={{ marginLeft: 10 }}
        >
          Delete
        </button>

        <br />
      </div>
    );
  }

  formatCount() {
    const { value: cnt } = this.props.counter;
    /* if (cnt === 0) {
      return "Zero";
    } else {
      return cnt;
    }*/
    return cnt === 0 ? "Zero" : cnt;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
