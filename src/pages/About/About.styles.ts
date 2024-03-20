import styled from 'styled-components'

interface ResponsiveProps {
  spaceType: string
  min: string
}

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 120rem;
`

export const AboutHeaders = styled.h2`
  font-size: 3rem;
  margin-left: 1rem;
`

export const AboutResponsive = styled.div<ResponsiveProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.spaceType}, minmax(${props.min}, 1fr))`};
`

export const Image = styled.img`
  max-height: 20rem;
  margin: 1rem auto;
`
