import React from 'react'
import PropTypes from 'prop-types'

import card from "../card"
import "./style.css"

export default function Board({
    disabled,
    dimension,
    cards,
    flipped,
    solved,
    handleClick,

}) {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={dimension / 4.5}
                    height={dimension / 4.5}
                    back={card.back}
                    flipped={flipped.includes(card.id)}
                    solved={disabled || solved.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                />
            ))}
        </div>

}

Board.PropTypes = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,

}