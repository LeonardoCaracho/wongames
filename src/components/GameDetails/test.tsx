import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'Walkabout',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    screen.getByRole('heading', { name: /developer/i })
    screen.getByRole('heading', { name: /release date/i })
    screen.getByRole('heading', { name: /platforms/i })
    screen.getByRole('heading', { name: /publisher/i })
    screen.getByRole('heading', { name: /rating/i })
    screen.getByRole('heading', { name: /genres/i })
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    screen.getByRole('img', { name: /linux/i })
    screen.getByRole('img', { name: /mac/i })
    screen.getByRole('img', { name: /windows/i })
  })

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('FREE')).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('18+')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
