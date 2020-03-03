import React from 'react'
import PropTypes from 'prop-types'

import card from "../card"
import Card from '../card'

export default function Board({ cards, flipped,
    handleClick }) {
    return <div className="board">
        {
            cards.map(card => (
                <Card
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={card.width}
                    height={card.height}
                    back={card.back}
                    flipped={flipped.includes(card.id)}
                    handleClick={() => handleClick(1)}
                />
            ))}
    </div>
)
}

Board.PropTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,

}