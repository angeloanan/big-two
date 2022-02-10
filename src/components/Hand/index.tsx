import React from 'react'

import { CardValue, resolveCardInfo } from '../../constants/cards'
import Card from '../Card'

const cardTranslation = ['translate-y-2', 'translate-y-0.5', '', 'translate-y-0.5', 'translate-y-2']
const cardRotation = ['-rotate-12', '-rotate-6', '', 'rotate-6', 'rotate-12']

interface HandProps {
  size?: 'normal' | 'small' | 'xsmall'
  cards: CardValue[]
}

// RESEARCH: use HOC and dynamically adjust children card rotation
// <Hand>
//   <Card />
//   <Card />
// <Hand />

/**
 * Rotating Hands, only works with 2, 3 or 5 cards
 */
const Hand = ({ cards, size = 'xsmall' }: HandProps) => {
  const resolvedHandCards = cards.map(resolveCardInfo)

  let hand
  if (!cards) return null

  if (cards.length === 1) {
    console.log(resolveCardInfo(cards[0]))

    hand = <Card size={size} suit={resolvedHandCards[0].suit} rank={resolvedHandCards[0].rank} />
  }

  if (cards.length === 2) {
    hand = resolvedHandCards.map((c, i) => (
      <div key={i} className={`transform ${cardTranslation[i * 2 + 1]} ${cardRotation[i * 2 + 1]}`}>
        <Card size={size} suit={c.suit} rank={c.rank} />
      </div>
    ))
  }

  if (cards.length === 3) {
    hand = resolvedHandCards.map((c, i) => (
      <div key={i} className={`transform ${cardTranslation[i + 1]} ${cardRotation[i + 1]}`}>
        <Card size={size} suit={c.suit} rank={c.rank} />
      </div>
    ))
  }

  if (cards.length === 5) {
    hand = resolvedHandCards.map((c, i) => (
      <div key={i} className={`transform ${cardTranslation[i]} ${cardRotation[i]}`}>
        <Card size={size} suit={c.suit} rank={c.rank} />
      </div>
    ))
  }

  return <div className='flex transform -space-x-3'>{hand}</div>
}

export default Hand
