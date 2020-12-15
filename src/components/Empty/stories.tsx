import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'title',
    description: 'description',
    hasLink: true
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
