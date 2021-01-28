import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CardListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CardList',
  component: CardList,
  args: {
    total: '$ 60,00',
    items: mockItems
  },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} />
  </div>
)

export const WithButton: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} hasButton />
  </div>
)
