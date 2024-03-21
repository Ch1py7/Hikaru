import { FC, ReactElement } from 'react'
import * as S from './Footer.styles'

export const Footer: FC = (): ReactElement => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterHeader>
          Contáctanos
        </S.FooterHeader>
        <S.FooterDesc>
          996-80-40 y 153-23-60<br />
          preparatoriamarsella@hotmail.com
        </S.FooterDesc>
      </S.FooterContainer>
    </S.Footer>
  )
}
