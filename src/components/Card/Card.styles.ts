import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 30px -10px #101010;
  -webkit-box-shadow: 0px 0px 30px -10px #101010;
  -moz-box-shadow: 0px 0px 30px -10px #101010;
`

export const CardImage = styled.img`
  height: 10rem;
  margin: 1rem 2rem;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 0;
`

export const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  `

export const CardDesc = styled.p`
  font-size: 1.4rem;
`