import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters: counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const ind = counters.indexOf(counter);
    counters[ind] = { ...counter };
    counters[ind].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const ind = counters.indexOf(counter);
    counters[ind] = { ...counter };
    counters[ind].value - 1 >= 0 && counters[ind].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          numbers={this.state.counters.filter(c => c.value > 0).length}
        ></Navbar>
        <main className="container" style={{ margin: 0 }}>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
