import { render, screen } from '@testing-library/react'
import 'match-media-mock'
import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slide item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 2, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
