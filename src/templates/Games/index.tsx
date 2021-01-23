import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import GameCard, { GameCardProps } from 'components/GameCard'
import { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import ExploreSidebar from 'components/ExploreSidebar'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      ></ExploreSidebar>

      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Show more</p>
          <ArrowDown size={35}></ArrowDown>
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
