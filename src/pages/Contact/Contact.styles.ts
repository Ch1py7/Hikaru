import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const Contact = styled.div`
  margin: 6rem auto 0;
  height: 100%;
  max-width: 120rem;
`

export const ContactTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
`

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const ContactInfo = styled.div`
  display: flex;
  max-width: 40rem;
  margin: 1rem 0;
`

export const ContactPhrase = styled.p`
  font-size: 2rem;
`

export const ContactImage = styled.img`
  max-height: 20rem;
  border-radius: 1rem;
`

export const ContactIcon = styled(Icon)`
  height: 3rem;
  width: 3rem;
  margin: 0 1rem;
`
