import styled from 'styled-components'

export const Academic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AcademicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 120rem;
`

export const AcademicApart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const AcademicResponsive = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`

export const AcademicTitle = styled.h4`
  font-size: 3rem;
`

export const AcademicDesc = styled.p`
  margin: 0 2rem;
  font-size: 1.6rem;
  text-align: center;
`
