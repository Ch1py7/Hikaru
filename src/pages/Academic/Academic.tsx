import { FC, ReactElement } from 'react'
import * as S from './Academic.styles'

export const Academic: FC = (): ReactElement => {
  return (
    <S.Academic>
      <img style={{ width: '100%' }} src='academic.webp' />
      <S.AcademicContainer>
        <S.AcademicApart>
          <S.AcademicTitle>ACADÉMICA</S.AcademicTitle>
          <S.AcademicDesc>Nuestros programas están incorporados a la Universidad de Guadalajara.</S.AcademicDesc>
          <S.AcademicDesc>El sistema por competencias ayuda a nuestros alumnos a adquirir conocimientos que se relacionan con la vida diaria, dando así las herramientas necesarias para responder a las necesidades del día a día.</S.AcademicDesc>
          <S.AcademicDesc>Nuestros profesores se encuentran capacitados en competencias docentes por la UdeG, cuentan con diplomados y certificaciones de la SEP otorgando a los alumnos el máximo desempeño posible.</S.AcademicDesc>
          <S.AcademicDesc>Contamos con departamento de orientación educativa, apoyo psicológico, departamento de tutorías y unidad de protección civil donde los alumnos pueden expandir su conocimiento y vivir una mejor experiencia educativa.</S.AcademicDesc>
        </S.AcademicApart>
      </S.AcademicContainer>
      <S.AcademicContainer>
        <S.AcademicResponsive>
          <S.AcademicApart>
            <img style={{ height: '5rem' }} src='science.webp' />
            <S.AcademicTitle>
              CIENCIA
            </S.AcademicTitle>
            <S.AcademicDesc>
              Nuestro Centro se enfoca en demostrar cómo las ciencias y las tecnologías son excelentes medios para comprender nuestro mundo y nos esforzamos por generar en los alumnos una conciencia científica e innovadora.
            </S.AcademicDesc>
          </S.AcademicApart>
          <S.AcademicApart>
            <img style={{ height: '5rem' }} src='literature.webp' />
            <S.AcademicTitle>LITERATURA</S.AcademicTitle>
            <S.AcademicDesc>Consideramos la lectura y la redacción como algo elemental en el desarrollo profesional, por ello nos damos a la tarea de formar grupos de lectura, talleres y conferencias que dan a los alumnos la confianza para explotar al máximo su lenguaje y comunicación.</S.AcademicDesc>
          </S.AcademicApart>
          <S.AcademicApart>
            <img style={{ height: '5rem' }} src='math.webp' />
            <S.AcademicTitle>MATEMATICAS</S.AcademicTitle>
            <S.AcademicDesc>Sabemos que las matemáticas son la mejor herramienta para elevar el potencial mental de los individuos, por ello nuestros maestros buscan la mejor adecuación de esta disciplina a la vida cotidiana, exigiendo a los alumnos lo mejor de si en la resolución de problemas.</S.AcademicDesc>
          </S.AcademicApart>
        </S.AcademicResponsive>
      </S.AcademicContainer>
    </S.Academic>
  )
}
