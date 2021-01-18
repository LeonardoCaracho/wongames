import Heading from '../Heading'
import Checkbox from '../Checkbox'
import Button from '../Button'
import Radio from '../Radio'

import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            ></Checkbox>
          ))}

        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              key={field.name}
              id={field.name}
              name={item.name}
              label={field.label}
              value={field.name}
              labelFor={field.name}
            ></Radio>
          ))}
      </div>
    ))}

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
