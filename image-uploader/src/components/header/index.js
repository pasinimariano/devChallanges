import React from 'react'

import { Container, Title, Logo } from './styles'
import DevLogo from '../../assets/devchallenges.png'

export const Header = () => {
  return (
    <Container>
      <Logo src={DevLogo} />
      <Title>devChallenges</Title>
    </Container>
  )
}
