import Base from 'templates/Base'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game}></GameCard>
        ))}
      </Grid>
      <Divider />
    </Container>

    <Showcase
      title="You may like these"
      games={recommendedGames}
      highlight={recommendedHighlight}
    ></Showcase>
  </Base>
)

export default Wishlist
