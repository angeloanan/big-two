import type { NextPage } from 'next'
import * as React from 'react'

import Card from '../components/Card'
import Hand from '../components/Hand'
import { CardRanks, CardSuits } from '../constants/cards'

const CardsPage: NextPage = () => {
  return (
    <>
      <div className='hidden space-x-2 md:flex'>
        <Card rank={CardRanks.ACE} suit={CardSuits.DIAMONDS} />
        <Card variant='back' rank={CardRanks.ACE} suit={CardSuits.DIAMONDS} />

        <Card rank={CardRanks.TWO} suit={CardSuits.DIAMONDS} size='small' />
        <Card variant='back' rank={CardRanks.TWO} suit={CardSuits.DIAMONDS} size='small' />

        <Card rank={CardRanks.THREE} suit={CardSuits.DIAMONDS} size='xsmall' />
        <Card variant='back' rank={CardRanks.THREE} suit={CardSuits.DIAMONDS} size='xsmall' />
      </div>

      <Hand cards={['Ad', '10c', '5s', '2h', 'Ad']} />
    </>
  )
}

export default CardsPage
