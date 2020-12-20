import Link from 'next/link'
import Button from '../Button'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink = true }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A game in a couch playing video game"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
