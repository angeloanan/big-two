import React from 'react'

import { CardRanks, CardSuits, CardSuitSymbol } from '../../constants/cards'

export interface CardProps {
  variant?: 'normal' | 'back'
  rank?: CardRanks
  suit?: CardSuits
  size?: 'normal' | 'small' | 'xsmall'
}

const Card = ({ rank, suit, variant, size = 'normal' }: CardProps) => {
  const suitSymbol = suit ? CardSuitSymbol[suit] : '?'
  const cardRank = rank ?? '?'

  let cardWidth = size === 'xsmall' ? '3rem' : size === 'small' ? '4rem' : '6rem'
  let cardHeight = size === 'xsmall' ? '4.2rem' : size === 'small' ? '5.6rem' : '8.4rem'
  // REFACTOR: Probably refactor to `Card.Side` and `Card.Back`?
  // Flip width and height if variant side
  // if (variant === 'side') {
  //   let temp = cardWidth
  //   cardWidth = cardHeight
  //   cardHeight = temp
  // }

  const cardTextSize = size === 'xsmall' ? 'text-base' : size === 'small' ? 'text-base' : 'text-xl'
  const cardSuitSize = size === 'xsmall' ? 'text-xs' : size === 'small' ? 'text-3xl' : 'text-4xl'
  const cardColor = suit === 'd' || suit === 'h' ? 'text-red-600' : 'text-black' // Diamonds and Hearts is red
  const cardGridSize = size === 'xsmall' ? 'grid-rows-2' : 'grid-rows-3'

  // If variant back, only render back
  if (variant === 'back') {
    return (
      <div
        className={`grid rotate-0 transform grid-cols-3 grid-rows-3 rounded border-4 border-red-900 bg-red-700 text-center leading-none shadow-md ${cardTextSize}`}
        style={{
          width: cardWidth,
          height: cardHeight
        }}
      />
    )
  }

  return (
    <div
      className={`grid select-none rounded border border-gray-200 bg-white text-center leading-none shadow-md ${cardColor} ${cardTextSize} ${cardGridSize}`}
      style={{
        width: cardWidth,
        height: cardHeight
      }}
    >
      {size === 'xsmall' ? (
        <>
          <div className={rank === '10' ? 'my-2 mb-px text-2xl tracking-tighter' : 'my-2 text-3xl'}>
            {cardRank}
          </div>
          <div className='col-start-2 row-start-2 -my-2 text-4xl'>{suitSymbol}</div>
        </>
      ) : (
        <>
          <div className='m-auto'>
            <div>{cardRank}</div>
            <div>{suitSymbol}</div>
          </div>

          <div className={`col-start-2 row-start-2 m-auto ${cardSuitSize}`}>{suitSymbol}</div>

          <div className='col-start-3 row-start-3 m-auto rotate-180 transform'>
            <div>{cardRank}</div>
            <div>{suitSymbol}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
