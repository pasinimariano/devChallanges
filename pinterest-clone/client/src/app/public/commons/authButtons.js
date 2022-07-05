import React from 'react'
import { Button } from 'react-bootstrap'

export const AuthButtons = ({ setModalShow, setRender, BootstrapStyles }) => {
  return (
    <>
      <Button
        style={BootstrapStyles.buttonNavigation('login')}
        onClick={() => {
          setModalShow(true)
          setRender('login')
        }}
      >
        Log in
      </Button>
      <Button
        style={BootstrapStyles.buttonNavigation()}
        onClick={() => {
          setModalShow(true)
          setRender('create')
        }}
      >
        Sign up
      </Button>
    </>
  )
}
