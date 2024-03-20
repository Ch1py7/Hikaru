import { FC, ReactElement } from 'react'
import * as S from './Contact.styles'

export const Contact: FC = (): ReactElement => {
  return (
    <S.Contact>
      <S.ContactTitle>Contáctanos</S.ContactTitle>
      <S.ContactInfo>
        <S.ContactIcon icon="fluent-mdl2:date-time-mirrored" />
        <S.ContactPhrase>Comunícate con nosotros: <br />
          Horarios de atención: lunes a viernes de 8:00 a 18:00 horas.
        </S.ContactPhrase>
      </S.ContactInfo>
      <S.ContactInfo>
        <S.ContactIcon icon="mdi:location" />
        <S.ContactPhrase>
          Av. Guadalupe González #101, <br />Unidad Ganadera, Aguascalientes, <br />Mexico, 20130
        </S.ContactPhrase>
      </S.ContactInfo>
      <S.ContactInfo>
        <S.ContactIcon icon="ic:baseline-phone" />
        <S.ContactPhrase>
          123-456-7890
        </S.ContactPhrase>
      </S.ContactInfo>
      <S.ContactInfo>
        <S.ContactIcon icon="ic:baseline-whatsapp" />
        <S.ContactPhrase>
          123-456-7890
        </S.ContactPhrase>
      </S.ContactInfo>
      <S.ContactInfo>
        <S.ContactIcon icon="material-symbols:mail-outline" />
        <S.ContactPhrase>
          preparatoriamarsella@hotmail.com
        </S.ContactPhrase>
      </S.ContactInfo>
    </S.Contact >
  )
}
