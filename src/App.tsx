import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'
import { About, Contact, Academic, Home } from 'pages'
import { FC, ReactElement } from 'react'
import { paths } from 'utils'

export const App: FC = (): ReactElement => {
  const { pathname } = window.location
  return (
    <>
      <NavBar />
      {pathname === paths.about && <About />}
      {pathname === paths.contact && <Contact />}
      {pathname === paths.academics && <Academic />}
      {pathname === paths.home && <Home />}
      <Footer />
    </>
  )
}
