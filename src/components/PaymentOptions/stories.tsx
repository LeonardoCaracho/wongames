import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'

import mockCards from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockCards
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
