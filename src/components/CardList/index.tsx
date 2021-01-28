import React from 'react'
import Link from 'next/link'

import GameItem, { GameItemProps } from '../GameItem'
import Button from '../Button'
import Empty from '../Empty'

import * as S from './styles'

export type CardListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CardList = ({ items = [], total, hasButton = false }: CardListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}
        <S.Footer>
          {!hasButton && <span>Total</span>}
          <S.Total>{total}</S.Total>

          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers"
      />
    )}
  </S.Wrapper>
)

export default CardList
