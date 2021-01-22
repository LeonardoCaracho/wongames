import Heading from '../Heading'
import TextField from '../TextField'
import Button from '../Button'

import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        name="email"
        placeholder="Email"
        label="Email"
        type="email"
        disabled
        initialValue="johndoe@mail.com"
      />

      <TextField
        name="password"
        placeholder="Type your password"
        label="Password"
        type="password"
      />

      <TextField
        name="new_password"
        placeholder="New password"
        label="New Password"
        type="password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
