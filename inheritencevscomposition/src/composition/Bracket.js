import React from 'react'

export default class Emoji extends React.Component{
    addBracket = (text) => `[${text}]`
    render() {
        return this.props.children({addBracket: this.addBracket });
    }
}