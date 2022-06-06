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
  })
}
