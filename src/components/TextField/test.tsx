import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('renders with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('renders without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey" />)

    expect(screen.queryByPlaceholderText('hey')).toBeInTheDocument()
  })

  it('changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField onInput={onInput} label="Label" labelFor="Field" id="Field" />
    )

    const input = screen.getByRole('textbox')
    const text = 'this is us'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('is accessible with tab', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    const input = screen.getByLabelText('Label')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('renders with icon', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="Label"
        labelFor="Field"
        id="Field"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders with  on the right side', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        iconPosition="right"
        label="Label"
        labelFor="Field"
        id="Field"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('renders with  on the left side', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        iconPosition="left"
        label="Label"
        labelFor="Field"
        id="Field"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 })
  })
})
