import { FC, ReactElement } from 'react'
import * as S from './Card.styles'

interface CardProps {
  title: string
  description: string
  image: string
}

export const Card: FC<CardProps> = ({ title, description, image }): ReactElement => {
  return (
    <S.Card>
      <S.CardImage src={image} />
      <S.CardInfo>
        <S.CardTitle>
          {title}
        </S.CardTitle>
        <S.CardDesc>
          {description}
        </S.CardDesc>
      </S.CardInfo>
    </S.Card>
  )
}
