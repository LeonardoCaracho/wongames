import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('renders with label', () => {
    renderWithTheme(<TextField label="Label" name="Field" />)

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
    renderWithTheme(<TextField onInput={onInput} label="Label" name="Field" />)

    const input = screen.getByRole('textbox')
    const text = 'this is us'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('does not change value when its disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField disabled onInput={onInput} label="Label" name="Field" />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'this is us'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('is not accessible with tab', () => {
    renderWithTheme(<TextField disabled label="Label" name="Field" />)

    const input = screen.getByLabelText('Label')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('is accessible with tab', () => {
    renderWithTheme(<TextField label="Label" name="Field" />)

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
        name="Field"
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
        name="Field"
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
        name="Field"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 0 })
  })

  it('renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        iconPosition="left"
        label="Label"
        name="Field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
