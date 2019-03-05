import GuessCount from './guessCount'
import Card from './card'
import React, { Component } from 'react'
import './App.css'


class App extends Component {
      handleCardClick(card){
            console.log(card,'clicked')
      }
        render() {
      return (
    <div className="memory">
      <GuessCount guesses={0} />
      <Card card="toto" feedback="hidden" onClick={this.handleCardClick}/>
      <Card card="tata" feedback="justMatched" onClick={this.handleCardClick}/>
      <Card card="coco" feedback="justMismatched" onClick={this.handleCardClick}/>
      <Card card="caca" feedback="visible" onClick={this.handleCardClick}/>
      <Card card="zozo" feedback="hidden" onClick={this.handleCardClick}/>
      <Card card="zaza" feedback="visible" onClick={this.handleCardClick}/>
    </div>
    )
  }

}

export default App
