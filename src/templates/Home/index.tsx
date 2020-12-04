import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'

import { Container } from '../../components/Container'
import Showcase from 'components/Showcase'
import Base from '../Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlights: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcomingGames,
  upcomingHighlights,
  freeGames,
  freeHighlights,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most popular"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase games={upcomingMoreGames} highlight={upcomingHighlights} />
    </S.SectionUpcoming>

    <Showcase title="Free Games" games={freeGames} highlight={freeHighlights} />
  </Base>
)

export default Home
