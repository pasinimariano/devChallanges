import React, { useEffect } from 'react'

import { ExploreNavigation } from '../components/navigation/exploreNavigation'
import { MainContainer } from './styles/homePageStyles'
import { ManageModal } from '../components/navigation/manageModal'

import { Statement } from './statements/homePageStatement'
import { BootstrapStyles } from './styles/homePageStyles'

export const HomePage = ({ userState }) => {
  const {
    exploreInput,
    render,
    setRender,
    modalShow,
    setModalShow,
    loginValues,
    createValues,
    serverError,
    dispatch,
    handleInput,
    removeInput
  } = Statement()

  return (
    <MainContainer>
      <ExploreNavigation
        userState={userState}
        exploreInput={exploreInput}
        render={render}
        setRender={setRender}
        modalShow={modalShow}
        setModalShow={setModalShow}
        handleInput={handleInput}
        removeInput={removeInput}
        BootstrapStyles={BootstrapStyles}
      />
      <ManageModal
        render={render}
        setRender={setRender}
        modalShow={modalShow}
        setModalShow={setModalShow}
        loginValues={loginValues}
        createValues={createValues}
        serverError={serverError}
        dispatch={dispatch}
        BootstrapStyles={BootstrapStyles}
      />
    </MainContainer>
  )
}
