import { FC, ReactElement, useEffect, useState } from 'react'
import { paths } from 'utils'
import * as S from './NavBar.styles'

export const NavBar: FC = (): ReactElement => {
  const [path, setPath] = useState<string>('')
  const { pathname } = window.location

  useEffect(() => { setPath(pathname) }, [pathname])

  return (
    <S.NavBar>
      <S.AnchorHome href='/'>
        <S.Logo src='/logo.jpg' />
        <h1>
          Preparatoria <br /> Marsella
        </h1>
      </S.AnchorHome>
      <S.OList>
        <S.List>
          <S.Anchor location={path === '/' ? true : false} href='/'>INICIO</S.Anchor>
        </S.List>
        <S.List>
          <S.Anchor location={path === paths.about ? true : false} href={paths.about}>
            QUIENES <br /> SOMOS
          </S.Anchor>
        </S.List>
        <S.List>
          <S.Anchor location={path === paths.contact} href={paths.contact}>CONTACTO</S.Anchor>
        </S.List>
        <S.List>
          <S.Anchor location={path === paths.academics} href={paths.academics}>ACADEMICA</S.Anchor>
        </S.List>
      </S.OList>
    </S.NavBar>
  )
}
