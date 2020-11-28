import Link from 'next/link'

import TextField from '../TextField'
import Button from '../Button'

import { Email, AccountCircle, Lock } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      ></TextField>

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      ></TextField>

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      ></TextField>

      <TextField
        name="confirm-password"
        placeholder="Confirm Password"
        type="confirm-password"
        icon={<Lock />}
      ></TextField>

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
