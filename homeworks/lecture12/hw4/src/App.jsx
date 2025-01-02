import './App.css'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    }
  }

  isNumber = (str) => /^\d+$/.test(str.trim());

  converter = (event) => {
    const input = event.target.value;
    let output = input;

    if (this.isNumber(input)) {
      const num = Number(input);
      const lastDigit = num % 10;
      const lastTwoDigits = num % 100;

      if ([11, 12, 13].includes(lastTwoDigits)) {
        output += 'th';
      } else {
        switch (lastDigit) {
          case 1:
            output += 'st';
            break;
          case 2:
            output += 'nd';
            break;
          case 3:
            output += 'rd';
            break;
          default:
            output += 'th';
        }
      }
    }
    this.setState({ input, output });
  }

  render() {
    return (
      <div className='layout'>
        <input type='text' placeholder="Provide your input" value={this.state.input} onChange={this.converter}></input>
        <input type='text' value={this.state.output} disabled></input>
      </div>
    )
  }
}
