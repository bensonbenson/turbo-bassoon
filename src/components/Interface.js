import React, { Component } from 'react'
import CommandEntry from './CommandEntry'
import './Interface.css'

export class Interface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventList:
      [
        {
          text: "",
          isUser: false
        },
      ]
    }
  }

  // Callback for CommandEntry, passes inputs to here
  getCommand = (msg) => {
    const newMsgObj = {
      text: msg,
      isUser: true
    }
    this.setState(prevState => {
      return { eventList: [...prevState.eventList, newMsgObj] }
    })
  }

  // Different CSS based on isUser
  renderText = () => {
    const { eventList } = this.state;
    return (
    eventList.map((event, index) => {
      if (event.isUser) {
        return (
          <div key={index}>{event.text}</div>
        )
      }
      return (
        <div key={index} className="interface-text">{event.text}</div>
      )
    })
    )
  }

  render() {
    return (
      <div>
        <div className="interface-area">
          {this.renderText()}
        </div>
        <CommandEntry callback={this.getCommand} />
      </div>
    )
  }
}

export default Interface
