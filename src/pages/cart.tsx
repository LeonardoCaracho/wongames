import React from 'react'
import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CardList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import paymentMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlights: highlightMock,
      items: itemsMock,
      total: '$ 60,00',
      cards: paymentMock
    }
  }
}
