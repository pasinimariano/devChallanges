import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'

import {
  SectionContainer,
  ThirdSectionImageText
} from '../../pages/styles/landingPageStyles'

export const ThirdSection = ({ BootstrapStyles }) => {
  return (
    <SectionContainer
      className='d-flex justify-content-center align-items-center'
      section='three'
    >
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <h2 style={BootstrapStyles.sectionTitle('blue')}>
          Save ideas you like
        </h2>
        <span style={BootstrapStyles.sectionSpan('blue')}>
          Collect your favorites so you can get back to them later.
        </span>
        <Link to='/home'>
          <Button style={BootstrapStyles.sectionButton('blue')}>Explore</Button>
        </Link>
      </Col>

      <Col
        className='d-flex justify-content-center align-items-center'
        style={{ height: '90%' }}
      >
        <Col style={{ height: '85%' }}>
          <div
            style={BootstrapStyles.thirdSectionImageContainer(
              '85%',
              '55%',
              0,
              'https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png'
            )}
            className='d-flex justify-content-end align-items-center'
          >
            <ThirdSectionImageText size='55px'>
              Fern future
            </ThirdSectionImageText>
            <ThirdSectionImageText size='55px'>
              home vibes
            </ThirdSectionImageText>
            <div
              style={{
                height: '30%',
                width: '90%',
                marginBottom: '35px'
              }}
              className='d-flex justify-content-around'
            >
              <div
                style={BootstrapStyles.thirdSectionImageContainer(
                  '25%',
                  '100%',
                  0,
                  'https://s.pinimg.com/webapp/future-home1-f4037b6b.png'
                )}
              />
              <div
                style={BootstrapStyles.thirdSectionImageContainer(
                  '25%',
                  '100%',
                  0,
                  'https://s.pinimg.com/webapp/future-home2-c70a8738.png'
                )}
              />
              <div
                style={BootstrapStyles.thirdSectionImageContainer(
                  '25%',
                  '100%',
                  0,
                  'https://s.pinimg.com/webapp/future-home3-ac09e50f.png'
                )}
              />
            </div>
          </div>
          <div
            style={{ width: '100%', height: '50%' }}
            className='d-flex justify-content-end align-items-center'
          >
            <div
              style={{
                width: '55%',
                height: '75%',
                margin: '60px',
                backgroundImage: `url('https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className='d-flex flex-column justify-content-end'
            >
              <ThirdSectionImageText size='26px' margin='35px'>
                Serve my
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='35px'>
                drinks in
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='35px'>
                style
              </ThirdSectionImageText>
            </div>
          </div>
        </Col>
        <Col style={{ height: '85%' }} className='d-flex flex-column'>
          <Col>
            <div
              style={BootstrapStyles.thirdSectionImageContainer(
                '52%',
                '100%',
                '10%',
                'https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png'
              )}
            >
              <ThirdSectionImageText size='26px' margin='25px'>
                My
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='25px'>
                Scandinavian
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='25px'>
                bedroom
              </ThirdSectionImageText>
            </div>
          </Col>
          <Col className='d-flex align-items-center'>
            <div
              style={BootstrapStyles.thirdSectionImageContainer(
                '30%',
                '60%',
                '5%',
                'https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png'
              )}
            >
              <ThirdSectionImageText size='20px' margin='10px'>
                The deck of
              </ThirdSectionImageText>
              <ThirdSectionImageText size='20px' margin='10px'>
                my dreams
              </ThirdSectionImageText>
            </div>
          </Col>
          <Col>
            <div
              style={BootstrapStyles.thirdSectionImageContainer(
                '52%',
                '100%',
                '0',
                'https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png'
              )}
            >
              <ThirdSectionImageText size='26px' margin='30px'>
                Our
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='30px'>
                bathroom
              </ThirdSectionImageText>
              <ThirdSectionImageText size='26px' margin='30px'>
                upgrade
              </ThirdSectionImageText>
            </div>
          </Col>
        </Col>
      </Col>
    </SectionContainer>
  )
}
