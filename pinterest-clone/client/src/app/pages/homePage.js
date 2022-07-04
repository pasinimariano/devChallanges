import React from 'react'

import { ExploreNavigation } from '../components/navigation/exploreNavigation'

import { Statement } from './statements/homePageStatement'
import { BootstrapStyles } from './styles/homePageStyles'

export const HomePage = ({ userState }) => {
  const {
    exploreInput,
    render,
    setRender,
    modalShow,
    setModalShow,
    handleInput,
    removeInput
  } = Statement()
  return (
    <>
      {userState ? (
        <h2>logged</h2>
      ) : (
        <ExploreNavigation
          exploreInput={exploreInput}
          render={render}
          setRender={setRender}
          modalShow={modalShow}
          setModalShow={setModalShow}
          handleInput={handleInput}
          removeInput={removeInput}
          BootstrapStyles={BootstrapStyles}
        />
      )}
    </>
  )
}
