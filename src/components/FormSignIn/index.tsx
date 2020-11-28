import Link from 'next/link'

import TextField from '../TextField'
import Button from '../Button'

import { Email } from '@styled-icons/material-outlined'
import { Lock } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
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

      <S.ForgetPassword href="#">Forgot your password?</S.ForgetPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <S.FormLink>
        Do not have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
