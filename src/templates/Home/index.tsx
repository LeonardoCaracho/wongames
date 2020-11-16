import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'

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
  <section>
    <Container>
      <Menu></Menu>

      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading color="black" lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Most popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlights} />
        <GameCardSlider items={upcomingMoreGames} color="white" />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighlights} />
        <GameCardSlider items={freeGames} color="white" />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer></Footer>
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
