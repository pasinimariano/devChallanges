import React from 'react'

import { ModalAuth } from './modalAuth'
import { ModalPins } from './modalPins'
import { Login } from '../auth/login'
import { CreateUser } from '../auth/create'
import { NewBoardBody } from './newBoardBody'

export const ManageModal = ({
  render,
  setRender,
  modalShow,
  setModalShow,
  newBoardValues,
  loginValues,
  createValues,
  createBoardValues,
  createBoard,
  owner,
  token,
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
      ) : render === 'createBoard' ? (
        <ModalPins
          title='Create your board'
          body={
            <NewBoardBody
              newBoardValues={newBoardValues}
              createBoard={createBoard}
              createBoardValues={createBoardValues}
              owner={owner}
              token={token}
              setModalShow={setModalShow}
              dispatch={dispatch}
              BootstrapStyles={BootstrapStyles}
            />
          }
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={BootstrapStyles}
          setRender={setRender}
        />
      ) : null}
    </>
  )
}
