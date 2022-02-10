export enum CardSuits {
  DIAMONDS = 'd',
  CLUBS = 'c',
  HEARTS = 'h',
  SPADES = 's'
}

export enum CardRanks {
  ACE = 'A',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K'
}

export const CardRanking = [
  CardRanks.TWO,
  CardRanks.FOUR,
  CardRanks.FIVE,
  CardRanks.SIX,
  CardRanks.SEVEN,
  CardRanks.EIGHT,
  CardRanks.NINE,
  CardRanks.TEN,
  CardRanks.JACK,
  CardRanks.QUEEN,
  CardRanks.KING,
  CardRanks.ACE,
  CardRanks.THREE
]

export const CardSuitSymbol: { [key in CardSuits]: string } = {
  d: '♦',
  c: '♣',
  h: '♥',
  s: '♠'
} as const

export type CardValue = `${CardRanks}${CardSuits}`

export const resolveCardInfo = (val: CardValue) => {
  return {
    rank: val.slice(0, -1) as CardRanks,
    suit: val.slice(-1) as CardSuits
  }
}
