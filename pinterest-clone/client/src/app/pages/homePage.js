import React, { useEffect } from 'react'

import { ExploreNavigation } from '../components/navigation/exploreNavigation'
import { MainContainer } from './styles/homePageStyles'
import { ManageModal } from '../components/navigation/manageModal'
import { RenderAllPins } from '../components/pins/renderAllPins'

import { getAllPins } from '../redux/features/pinSlice'
import { Statement } from './statements/homePageStatement'
import { BootstrapStyles } from './styles/homePageStyles'

export const HomePage = ({ logged, token }) => {
  const {
    exploreInput,
    render,
    setRender,
    modalShow,
    setModalShow,
    loginValues,
    createValues,
    serverError,
    allPins,
    dispatch,
    handleInput,
    removeInput
  } = Statement()

  useEffect(() => {
    dispatch(getAllPins())
  }, [])

  useEffect(() => {
    if (logged) {
      setModalShow(false)
    }
  }, [logged])

  return (
    <MainContainer>
      <ExploreNavigation
        logged={logged}
        exploreInput={exploreInput}
        render={render}
        setRender={setRender}
        modalShow={modalShow}
        setModalShow={setModalShow}
        handleInput={handleInput}
        removeInput={removeInput}
        BootstrapStyles={BootstrapStyles}
      />
      <RenderAllPins allPins={allPins} BootstrapStyles={BootstrapStyles} />
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
