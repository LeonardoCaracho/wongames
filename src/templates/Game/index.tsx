import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlights,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover"></S.Cover>
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo}></GameInfo>
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description}></TextContent>
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details}></GameDetails>
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlights}
      ></Showcase>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
      ></Showcase>
    </S.Main>
  </Base>
)

export default Game
