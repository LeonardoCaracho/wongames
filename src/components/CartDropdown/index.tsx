import { GameItemProps } from '../GameItem'
import Dropdown from '../Dropdown'
import CartIcon from '../CartIcon'
import CardList from '../CardList'

import * as S from './styles'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items = [], total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CardList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
