import { Card } from 'components/Card'
import { FC, ReactElement } from 'react'
import * as S from './About.styles'

export const About: FC = (): ReactElement => {
  return (
    <S.About>
      <S.AboutContainer>
        <S.AboutHeaders>
          ¿Quienes somos?
        </S.AboutHeaders>
        <S.AboutInformation width={'80rem'}>
          <S.AboutDesc>Somos Preparatoria Marsella, una Institucion de Educacion Media Superior en el estado, avalada por el Instituto de Educacion de Aguascalientes, con un nivel academico de excelencia, acorde a las necesidades actuales, ya que nuestro equipo de traajo esta conformado por prfesionales en la educacion en constante actualizacion</S.AboutDesc>
          <S.Image height='14rem' src='/about.png' />
        </S.AboutInformation>
      </S.AboutContainer>
      <S.AboutContainer>
        <S.AboutHeaders>
          Nuestros valores
        </S.AboutHeaders>
        <S.AboutResponsive min='50rem' spaceType='auto-fit'>
          <Card
            title='HONESTIDAD'
            description='Actuamos con integridad, congruencia y rectitud en nuestro que hacer cotidiano y nos conducimos con apego a la verdad.'
            image='/honesty.png'
          />
          <Card
            title='DESARROLLO HUMANO'
            description='Construimos un ambiente de oportunidades, respeto y confianza para motivar a la pasión por el aprendizaje y la superación permanentes.'
            image='/develop.png'
          />
          <Card
            title='RESPONSABILIDAD'
            description='Estamos comprometidos con la comunidad universitaria y con la sociedad, con esto desempeñamos nuestro trabajo con exigencia y profesionalismo.'
            image='/responsibility.png'
          />
          <Card
            title='SERVICE'
            description='Nos vinculamos permanentemente con nuestro entorno para satisfacer sus necesidades con calidad, oportunidad y trato amable.'
            image='/service.png'
          />
        </S.AboutResponsive>
      </S.AboutContainer>
      <S.AboutContainer>
        <S.AboutHeaders>
          Experiencias
        </S.AboutHeaders>
        <S.AboutResponsive min='30rem' spaceType='auto-fill'>
          <S.Image height='20rem' src='/exp1.jpg' />
          <S.Image height='20rem' src='/exp2.jpg' />
          <S.Image height='20rem' src='/exp3.jpg' />
          <S.Image height='20rem' src='/exp4.jpg' />
          <S.Image height='20rem' src='/exp5.jpg' />
          <S.Image height='20rem' src='/exp6.jpg' />
          <S.Image height='20rem' src='/exp7.jpg' />
          <S.Image height='20rem' src='/exp8.jpg' />
        </S.AboutResponsive>
      </S.AboutContainer>
    </S.About>
  )
}
