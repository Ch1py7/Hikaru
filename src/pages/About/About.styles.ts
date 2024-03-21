import styled from 'styled-components'

interface ResponsiveProps {
  spaceType: string
  min: string
}

interface AboutInformationProps {
  width: string
}

interface AboutImageProps {
  height: string
}

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 120rem;
`

export const AboutContainer = styled.div`
  margin: 2rem 0 0 0;
`

export const AboutHeaders = styled.h2`
  font-size: 3rem;
  margin-left: 1rem;
`

export const AboutResponsive = styled.div<ResponsiveProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.spaceType}, minmax(${props.min}, 1fr))`};
`

export const Image = styled.img<AboutImageProps>`
  height: ${(props) => props.height};
  margin: 1rem auto;
`

export const AboutInformation = styled.div<AboutInformationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${(props) => props.width};
`

export const AboutDesc = styled.p`
  margin: 0 2rem;
  font-size: 1.6rem;
`
