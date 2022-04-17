import React, { useState } from 'react';

class SpyNameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', revInput: ''};
    this.handleInputChange = this.handleInputChange.bind(this); 
  }

  handleInputChange(event) {
    this.setState({input: event.target.value}); 
    this.setState({revInput: event.target.value.split("").reverse().join("")})
  }

  render() {
    return (
      <>
        <h1>Spy Name Generator</h1>
        <h2>Previous Spy Name: </h2>
        <p>{this.state.revInput}</p>

        <h2>Current Spy Name: </h2>
        <p>{this.state.input}</p>

        <div>
          <input type="text" value={this.state.input} onChange={this.handleInputChange} />
          <button className="button1">
            Save
          </button>
        </div>
      </>
    );
  }
}

// function SpyNameGenerator(props) {
//   const [input, setInput] = useState('hello'); 
//   return (
//     <>
//       <h1>Spy Name Generator</h1>
//       <h2>Previous Spy Name: </h2>
//       <p>{/* Something goes here! */}</p>

//       <h2>Current Spy Name: </h2>
//       <p>{}</p>

//       <div>
//         <input type="text" value={input} onChange={setInput}/>
//         <button className="button1">
//           Save
//         </button>
//       </div>
//     </>
//   );
// }
export default SpyNameGenerator;
