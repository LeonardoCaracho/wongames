import * as S from './styles'
import Logo from '../Logo/'
import Heading from '../Heading/'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <a href="/">Home</a>
          <a href="/games">Store</a>
          <a href="/search">Buscar</a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit</span>
        <span>Lorem ipsum </span>
        <span>Lorem ipsum dolor</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © All Rights Reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
