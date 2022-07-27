import React from 'react'

export const setProfilePicture = (owner, picture) => {
  let color
  if (picture) {
    color = picture.slice(1, 8)
  }
  const split = owner.split(' ')

  const capitals = split.map(letter => letter[0].toUpperCase()).join('')

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: '40px',
        width: '30px',
        height: '30px'
      }}
      className='d-flex justify-content-center align-items-center'
    >
      {capitals}
    </div>
  )
}
