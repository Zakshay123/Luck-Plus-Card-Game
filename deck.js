const TYPE = ["Go","Stop","Transfer","Transfer Plus"]
const VALUE = ["1","2","3","4","5","6","7","8","9","10","11","12"]
const COLOR= [red1,yellow1,green1]
red1= RGB(255,0,0)
green1= RGB(0,255,0)
yellow1=RGB(255,255,0)

export default class Deck{
    constructor(cards=freshDeck()){
    this.cards=cards
    }
    get numberOfCards(){
return this.cards.lentgh
    }

    shuffle(){
        for(let i = this.numberOfCards - 1; i > 0; i--)
        const newIndex = Math.floor(Math.random() * (i+1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
    }

}



class Card {
    constructor(color, value, type){
        this.color=color
        this.value=value
        this.type=type
    }
}

function  freshDeck(){
    return TYPE.flatMap(suit => {
        return VALUE.map(value => {
            return COLOR.map(color =>{
                return new Card(type,value,color)
            })
        })
    })
}