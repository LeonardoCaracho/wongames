import * as S from './styles'

import { Container } from '../../components/Container'
import Heading from '../../components/Heading'
import GameCardSlider from '../../components/GameCardSlider'
import Highlight from '../../components/Highlight'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

export type ShowcaseProps = {
  title?: string
  games?: GameCardProps[]
  highlight?: HighlightProps
  arrowColor?: 'white' | 'black'
}

const Showcase = ({
  title,
  games,
  highlight,
  arrowColor = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    <Container>
      {!!title && (
        <Heading color="white" lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} color={arrowColor} />}
    </Container>
  </S.Wrapper>
)

export default Showcase
