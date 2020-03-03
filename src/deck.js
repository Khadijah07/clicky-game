function shuffle(array) {
    const_array = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return_array
}

export default function initializeDeck() {
    let id = 0
    const cards = ['react', "reactu", "redux", "vue", "angular",
        "javascript", "ruby", "rails"
    ].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })

        return acc
    }, [])

    return Shuffle(cards)
}

