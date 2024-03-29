import styled, { keyframes } from 'styled-components'

import { Colors } from '../../mainStyles'

export const MainContainer = styled.div`
  height: 100%;
`

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
  }),
  formContainer: {
    width: '90%'
  },
  formInput: {
    width: '100%',
    borderRadius: '15px'
  },
  form: {
    borderRadius: '12px'
  },
  formButton: (google, margin) => ({
    border: 'none',
    borderRadius: '12px',
    width: '70%',
    marginTop: margin ? '50px' : null,
    backgroundColor: google ? Colors.blue : Colors.purple,
    fontWeight: 'bolder'
  }),
  formCreateBoardContainer: {
    width: '100%',
    marginBottom: '25px'
  },
  formCreateBoard: {
    width: '100%',
    height: '5vh',
    borderRadius: '25px',
    textAlign: 'center',
    border: `solid ${Colors.gray}`
  },
  modalTitleContainer: {
    width: '100%'
  },
  modalLogo: {
    height: '55px',
    marginBottom: '10px'
  },
  modalTitle: {
    fontWeight: 'bolder',
    fontSize: '32px',
    textAlign: 'center'
  },
  modalSubTitle: {
    fontWeight: 'bolder',
    fontSize: '22px',
    textAlign: 'center'
  },
  or: {
    fontWeight: 'bolder',
    fontSize: '15px',
    margin: '10px'
  },
  termsContainer: {
    width: '60%',
    marginTop: '25px',
    textAlign: 'center'
  },
  span: {
    fontSize: '11px'
  },
  href: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bolder'
  },
  footer: {
    fontWeight: 'bolder',
    fontSize: '12px'
  },
  footerHover: {
    fontWeight: 'bolder',
    fontSize: '12px',
    color: Colors.coral
  },
  showError: {
    color: Colors.coral,
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '15px'
  },
  galeryContainer: {
    width: '95%',
    marginTop: '30px'
  },
  cardContainer: {
    border: 'none'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  cardFooter: {
    border: 'none',
    backgroundColor: 'white',
    width: '50%'
  },
  ownerContainer: {
    width: '60%',
    fontSize: '12px',
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  ownerProfile: {
    borderRadius: '40px',
    width: '30px',
    height: '30px'
  },
  heartIcon: {
    color: Colors.coral
  },
  emogiIcon: {
    color: Colors.purple
  },
  starIcon: {
    color: Colors.yellow
  },
  newBoardImg: {
    width: '85%',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  newBoardTitle: {
    fontWeight: 'bolder',
    fontSize: '16px'
  },
  createBoardButton: hover => ({
    backgroundColor: hover ? Colors.wine : 'white',
    color: hover ? 'white' : Colors.wine,
    borderColor: Colors.wine,
    fontWeight: 'bolder',
    marginBottom: '20px'
  }),
  cancelBoardButton: {
    backgroundColor: Colors.wine,
    color: 'white',
    borderColor: Colors.wine,
    fontWeight: 'bolder',
    marginBottom: '20px'
  }
}
