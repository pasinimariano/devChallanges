import React from 'react'
import { Container } from 'react-bootstrap'

export const TermsContainer = ({ style }) => {
  return (
    <Container
      className='d-flex justify-content-center'
      style={style.termsContainer}
    >
      <span style={style.span} className='d-flex flex-column'>
        <span>By continuing, you agree to Pinhunt's</span>
        <Container>
          <a
            href='https://policy.pinterest.com/en/terms-of-service'
            target='_blank'
            style={style.href}
          >
            Terms of service
          </a>
          <span>{` and acknowledge you've read our`}</span>
        </Container>
        <a
          href='https://policy.pinterest.com/en/privacy-policy'
          target='_blank'
          style={style.href}
        >
          Privacy Policy
        </a>
      </span>
    </Container>
  )
}
