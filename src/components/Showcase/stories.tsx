import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'

import HighlightMock from '../Highlight/mock'
import GamesMock from '../GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlights: HighlightMock,
  games: GamesMock
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  highlights: HighlightMock,
  games: GamesMock
}

export const WithoutHighlights: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlights.args = {
  title: 'Most Popular',
  games: GamesMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlights: HighlightMock
}
