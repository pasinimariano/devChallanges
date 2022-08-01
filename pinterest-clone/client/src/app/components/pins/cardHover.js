import React from 'react'
import { Container, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { IoMdDownload } from 'react-icons/io'

export const CardHover = ({
  imgId,
  url,
  boards,
  handleDropChange,
  setRender,
  setModalShow,
  setNewBoardValues,
  option
}) => {
  return (
    <Container className='my-hover'>
      <Container className='d-flex justify-content-center align-items-center'>
        <DropdownButton
          title='Select board'
          variant='dark'
          bg='dark'
          menuVariant='dark'
          size='lg'
        >
          {boards.map(board => {
            return (
              <Dropdown.Item
                as='button'
                key={board}
                onClick={event => handleDropChange(event)}
              >
                {board}
              </Dropdown.Item>
            )
          })}
          <Dropdown.Divider />
          <Dropdown.Item
            as='button'
            key='create'
            onClick={event => {
              setRender('createBoard')
              handleDropChange(event)
              setNewBoardValues({ id: imgId, url: url })
              setModalShow(true)
            }}
          >
            Create new
          </Dropdown.Item>
        </DropdownButton>
      </Container>
      <Container className='d-flex justify-content-center align-items-center'>
        <Button
          className='hover-button'
          hidden={option && option !== 'Create new' ? false : true}
        >
          Pin it
        </Button>
      </Container>
      <Container className='d-flex justify-content-center align-items-center'>
        <IoMdDownload className='hover-download' size={35} />
      </Container>
    </Container>
  )
}
