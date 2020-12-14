import { screen } from '@testing-library/react'

import gameDetailsMock from '../../components/GameDetails/mock'
import gameInfoMock from '../../components/GameInfo/mock'
import galleryMock from '../../components/Gallery/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

import Game, { GameTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Content</h1>`,
  details: gameDetailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcomingHighlights: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getAllByTestId(/Mock Showcase/i)).toHaveLength(2)
    expect(screen.getByTestId(/Mock Menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock Gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock GameDetails/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock GameInfo/i)).toBeInTheDocument()
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should not render galley if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)
    expect(screen.queryByTestId(/Mock Gallery/i)).not.toBeInTheDocument()
  })

  it('should not render galley on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/Mock Gallery/i).parentElement).toHaveStyle({
      display: 'none'
    })

    expect(
      screen.getByTestId(/Mock Gallery/i).parentElement
    ).toHaveStyleRule('display', 'block', { media: '(min-width: 768px)' })
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
