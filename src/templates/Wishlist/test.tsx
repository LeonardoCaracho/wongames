import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from '.'

import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

const props = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  games: gamesMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
  })
})
