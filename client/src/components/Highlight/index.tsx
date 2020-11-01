import * as S from './styles'
import Button from '../Button'

export type ALigmentProps = 'left' | 'right'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: ALigmentProps
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel = 'Buy now',
  buttonLink,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
