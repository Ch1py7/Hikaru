import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const Contact = styled.div`
  margin: 0 auto;
  max-width: 120rem;
`

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
`

export const ContactInfo = styled.div`
  display: flex;
  max-width: 40rem;
  margin: 1rem 0;
`

export const ContactPhrase = styled.p`
  font-size: 2rem;
`

export const ContactIcon = styled(Icon)`
  height: 3rem;
  width: 3rem;
  margin: 0 1rem;
`
