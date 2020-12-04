import * as S from './styles'

import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
      {children}
      <S.SectionFooter>
        <Container>
          <Footer></Footer>
        </Container>
      </S.SectionFooter>
    </Container>
  </section>
)

export default Base
