const cartelaQt = 75;

let game = {

    techs: [],

    cards: null,

    setCard: function(id) {
        let card = this.cards.filter(card => card.id === id)[0];
        this.flipped = true;
    },

    createCardsFromTechs: function() {
        this.cards = [];
        this.techs.forEach((tech) => {
            this.cards.push(tech);
        })
        this.cards = this.cards.flatMap(pair => pair);
        return this.cards;
    },

    createPairFromTech: function(tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },

    createIdWithTech: function(tech) {
        return tech + parseInt(Math.random() * 1000);
    }
}

for (let index = 0; index < cartelaQt; index++) {
    game.techs[index] = index + 1;;
}