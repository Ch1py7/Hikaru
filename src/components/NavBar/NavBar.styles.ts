import styled from 'styled-components'

interface AnchorProps {
  location: boolean
}

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
  background-color: #008ec8;
`

export const Logo = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  margin-right: 1rem;
  padding: 8px;
`

export const Anchor = styled.a<AnchorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.location ? '#efefef' : '#0b0b0b'};
  transition: ease 200ms;
  &:hover {
    color: #efefef;
  }
`

export const AnchorHome = styled.a`
  display: flex;  
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #0b0b0b;
`

export const OList = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
  margin-right: 20rem;
`

export const List = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  margin: 0 1.2rem;
  
`