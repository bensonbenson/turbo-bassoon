import React, { Component } from 'react'
import CommandEntry from './CommandEntry'
import { parseUserInput } from './UserInputParser'
import './styles/Interface.css'

export class Interface extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventList:
      [
        {
          text: "Greetings. Currently WIP, try typing 'commands' for current commands list",
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
    }, () => {
      let userMsgResult = parseUserInput(msg);
      if (!userMsgResult) {
        this.pushRobitMessage("")
      } else {
        this.pushRobitMessage(userMsgResult)
      }
    })
  }

  pushRobitMessage = (msg) => {
    let msgObj;
    if (!msg) {
      msgObj = {
        text: "Unrecognizable command, try again.",
        isUser: false
      }
    } else {
      msgObj = {
        text: msg,
        isUser: false
      }
    }

    this.setState(prevState => {
      return { eventList: [...prevState.eventList, msgObj]}
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
