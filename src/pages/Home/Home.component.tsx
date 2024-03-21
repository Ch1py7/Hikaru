import { FC, ReactElement } from 'react'
import { paths } from 'utils'
import * as S from './Home.styles'

export const Home: FC = (): ReactElement => {
  return (
    <S.Home>
      <S.HomeContainer>
        <S.HomeImage src='/main.jpg' />
        <S.HomeInfoContainer>
          <S.HomeTitle>
            Prepa Marsella
          </S.HomeTitle>
          <S.HomeDesc>
            Somos una institución  de estudios que  ofrece educación  de calidad bajo los principios de humanismo, igualdad y respeto dejando un legado de valores, acción y compromiso en cada uno de nuestros estudiantes.
          </S.HomeDesc>
          <S.HomeAnchor href={paths.about}>Quiero saber mas</S.HomeAnchor>
        </S.HomeInfoContainer>
      </S.HomeContainer>
      <S.HomeContainer>
        <S.HomeInfoContainer>
          <S.HomeTitle>
            Proyectos
          </S.HomeTitle>
          <S.HomeDesc>
            Somos una institución  de estudios que  ofrece educación  de calidad bajo los principios de humanismo, igualdad y respeto dejando un legado de valores, acción y compromiso en cada uno de nuestros estudiantes.
          </S.HomeDesc>
        </S.HomeInfoContainer>
        <S.HomeImage src='/project.jpg' />
      </S.HomeContainer>
    </S.Home>
  )
}
