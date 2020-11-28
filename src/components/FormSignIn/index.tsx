import Link from 'next/link'

import TextField from '../TextField'
import Button from '../Button'

import { Email } from '@styled-icons/material-outlined'
import { Lock } from '@styled-icons/material-outlined'

import * as S from './styles'
import { FormWrapper, FormLink } from '../Form'

const FormSignIn = () => (
  <FormWrapper>
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

      <FormLink>
        Do not have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
