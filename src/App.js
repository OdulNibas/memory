<<<<<<< HEAD
import React, { Component } from 'react'

import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './card'

import GuessCount from './guessCount'

import HallOfFame, {FAKE_HOF} from './hallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) =>(
        <Card 
          card={card}
          feedback="visible"
          key={index}
          onClick='this.handleCardClick' />
      ))}
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
=======
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

>>>>>>> c5d582b0e4f1cb5cbd1c2cc3f9f7ba354b21ef4b
}

export default App
