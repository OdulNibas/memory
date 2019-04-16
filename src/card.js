<<<<<<< HEAD
import React from 'react'

import './card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
<div className={`card ${feedback}`} onClick={() =>onClick(card)}>
  <span className="symbol">
    {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
  </span>
</div>
)
export default Card
=======
import React from 'react'

import './card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, onClick}) => (
<div className={`card ${feedback}`} onClick={() =>onClick(card)}>
  <span className="symbol">
    {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
  </span>
</div>
)
export default Card
>>>>>>> c5d582b0e4f1cb5cbd1c2cc3f9f7ba354b21ef4b
