import React, { useState, useEffect } from "react"
import board from "./components/board"
import Board from "./src/components/board"

import initializeDeck from "./deck"

export default function App() {
    const [cards, setCard] = useState([])
    const [flipped, setFlipped] = useState([])

    useEffect(() => {
        setCards(initializeDeck())
    }, [])

    const handleClick = (id) => setFlipped([...flipped, id])
    return (
        <div>
            <h2> Can you remember where the cards are ? </h2>
            <Board
                cards={cards} flipped={flipped} handleClick=
                {handleClick} />
        </div>
    )
}