import { Colors } from '../../mainStyles'
import { fadeInUp, fadeOutUp } from 'react-animations/'
import styled, { keyframes } from 'styled-components'

export const MainContainer = styled.div``

export const CarouselTitle = styled.h4`
  font-weight: bolder;
  font-size: 60px;
  margin: 2px;
`

const fadeUpAnimation = keyframes`${fadeInUp}`
const fadeOutAnimation = keyframes`${fadeOutUp}`

export const FadeText = styled(CarouselTitle)`
  animation: 2s ${fadeUpAnimation};
  text-align: center;
  color: ${props =>
    props.page === 0
      ? Colors.blue
      : props.page === 1
      ? Colors.green
      : props.page === 2
      ? Colors.brown
      : props.page === 3
      ? Colors.violet
      : Colors.gray};
`

export const FadeImage = styled.div`
  animation: ${props => props.fade}s
    ${props => (props.animation ? fadeUpAnimation : fadeOutAnimation)};
  width: 236px;
  height: 350px;
  background-image: url(${props => props.image});
  background-size: cover;
  margin-bottom: 10px;
  border-radius: 20px;
`

export const BootstrapStyles = {
  navigationConteiner: {
    height: '7vh'
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
  carouselContainer: {
    width: '100vw',
    height: '93vh',
    position: 'relative',
    overflow: 'hidden'
  },
  carouselTitleContainer: {
    height: '38vh',
    position: 'absolute',
    top: '0'
  },
  carouselSubtitleContainer: {
    height: '10vh',
    position: 'absolute',
    top: '38vh'
  },
  carouselControl: {
    color: Colors.gray,
    margin: '5px'
  },
  carouselControlSelected: page => ({
    color:
      page === 0
        ? Colors.blue
        : page === 1
        ? Colors.green
        : page === 2
        ? Colors.brown
        : page === 3
        ? Colors.violet
        : Colors.gray,
    margin: '5px'
  }),
  ImagesContainer: {
    width: '95%',
    position: 'absolute',
    top: '48vh'
  },
  carouselRow: pos => ({
    position: 'relative',
    bottom: pos ? pos : null
  }),
  modalTitleContainer: {
    width: '100%'
  },
  modalLogo: {
    height: '55px'
  },
  modalTitle: {
    fontWeight: 'bolder',
    fontSize: '32px'
  },
  modalSubTitle: {
    fontWeight: 'bolder',
    fontSize: '22px'
  },
  formContainer: {
    width: '90%'
  },
  formInput: {
    width: '70%',
    borderRadius: '15px',
    marginBottom: '5px'
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
  }
}
