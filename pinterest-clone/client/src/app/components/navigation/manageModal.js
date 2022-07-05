import React from 'react'

import { ModalAuth } from './modal'
import { Login } from '../auth/login'
import { CreateUser } from '../auth/create'

export const ManageModal = ({
  render,
  setRender,
  modalShow,
  setModalShow,
  loginValues,
  createValues,
  serverError,
  dispatch,
  BootstrapStyles
}) => {
  return (
    <>
      {render === 'login' ? (
        <ModalAuth
          title='Welcome to Pinhunt'
          body={
            <Login
              loginValues={loginValues}
              serverError={serverError}
              dispatch={dispatch}
              style={BootstrapStyles}
            />
          }
          footer='login'
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={BootstrapStyles}
          setRender={setRender}
        />
      ) : render === 'create' ? (
        <ModalAuth
          title='Welcome to Pinhunt'
          subtitle='Find new ideas to try'
          body={
            <CreateUser
              createValues={createValues}
              serverError={serverError}
              dispatch={dispatch}
              style={BootstrapStyles}
            />
          }
          footer='create'
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={BootstrapStyles}
          setRender={setRender}
        />
      ) : null}
    </>
  )
}
