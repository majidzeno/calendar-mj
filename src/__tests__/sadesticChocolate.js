// import React, { Component } from "react";
// import { loadGreeting } from "./api";

// class GreetingLoader extends Component {
//   static defaultProps = { loadGreeting };
//   inputRef = React.createRef();
//   state = { greeting: "" };
//   loadGreetingForInput = async e => {
//     e.preventDefault();
//     const { data } = await this.props.loadGreeting(this.inputRef.current.value);
//     this.setState({ greeting: data.greeting });
//   };
//   render() {
//     return (
//       <form data-testid="form" onSubmit={this.loadGreetingForInput}>
//         <label htmlFor="name">Name</label>
//         <input id="name" ref={this.inputRef} />
//         <button type="submit">Load Greeting</button>
//         <div data-testid="greeting">{this.state.greeting}</div>
//       </form>
//     );
//   }
// }

// export { GreetingLoader };
const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
};

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(3, 5);
let expected = 8;

expect(result).toBe(expected);

result = subtract(10, 8);
expected = 23;

expect(result).toBe(expected);
