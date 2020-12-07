import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'game title',
  description: 'game description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    screen.getByRole('heading', { name: 'game title' })
    screen.getByText('$210.00')
    screen.getByText('game description')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    screen.getByRole('button', { name: /add to cart/i })
    screen.getByRole('button', { name: /wishlist/i })
  })
})
