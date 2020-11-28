import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const ForgetPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: right;

    &:hover {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
    }

    &:hover {
      color: ${darken(0.1, theme.colors.secondary)};
      transition: color, border, ${theme.transition.fast};
    }
  `}
`
