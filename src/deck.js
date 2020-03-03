function shuffle(array) {

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

    return cards
}