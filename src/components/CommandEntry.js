import React, { Component } from 'react'
import './CommandEntry.css'

export class CommandEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMsg: ""
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  // Callback message to pass to CommandEntry
  handleSubmit = (e) => {
    e.preventDefault();
    const msg = this.state.currentMsg;
    this.props.callback(msg);
    this.setState({currentMsg: ""})
  }

  render() {
    return (
      <div className="command-line-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="command-line" name="currentMsg" value={this.state.currentMsg} onChange={this.handleChange} />
          <button type="submit" className="command-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CommandEntry
