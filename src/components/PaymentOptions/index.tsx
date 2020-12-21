import * as S from './styles'
import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

import Heading from '../Heading'
import Radio from '../Radio'
import Button from '../Button'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  flag: string
  number: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              ></Radio>
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          disabled={!checked}
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
