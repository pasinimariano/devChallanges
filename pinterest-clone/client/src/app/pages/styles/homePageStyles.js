import styled, { keyframes } from 'styled-components'

import { Colors } from '../../mainStyles'

export const SearchBarContainer = styled.div`
  width: 95%;
  height: 5vh;
  border-radius: 25px;
  text-align: center;
  border: solid ${Colors.gray};
`

export const SearchBar = styled.input`
  width: 95%;
  border: none;
  font-weight: bolder;
  margin-left: 10px;
`

export const BootstrapStyles = {
  navigationContainer: {
    height: '7vh'
  },
  navTitle: {
    fontWeight: 'bolder',
    fontSize: '20px',
    margin: '10px'
  },
  buttonNavigation: color => ({
    backgroundColor: color === 'login' ? Colors.purple : Colors.gray,
    border: 'none',
    borderRadius: '20px',
    margin: '10px',
    fontWeight: 'bolder',
    color: color === 'login' ? 'withe' : 'black',
    width: '100px'
  })
}
