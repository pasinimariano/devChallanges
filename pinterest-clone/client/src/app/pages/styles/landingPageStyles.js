import { Colors } from '../../mainStyles'
import { fadeInUp } from 'react-animations/'
import styled, { keyframes } from 'styled-components'

export const MainContainer = styled.div``

export const CarouselTitle = styled.h4`
  font-weight: bolder;
  font-size: 60px;
  margin: 2px;
`

const fadeUpAnimation = keyframes`${fadeInUp}`

export const FadeText = styled(CarouselTitle)`
  animation: 1s ${fadeUpAnimation};
  text-align: center;
`

export const FadeImage = styled.div`
  animation: ${props => props.fade}s ${fadeUpAnimation};
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
  carouselControlSelected: {
    color: Colors.purple,
    margin: '5px'
  },
  carouselRow: pos => ({
    position: 'relative',
    bottom: pos ? pos : null
  })
}
