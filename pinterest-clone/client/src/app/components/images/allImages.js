import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllImages } from '../../redux/features/imageSlice'

export const AllImages = () => {
  const userState = useSelector(state => state.auth.logged)
  const imageState = useSelector(state => state.images.allImages)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userState) {
      dispatch(getAllImages(userState.token))
    }
  }, [userState])

  return (
    <div>
      <h5>IMAGES</h5>
      {imageState.length === 0 ? (
        <h5> Loading... </h5>
      ) : (
        imageState.images.map(image => {
          return (
            <div key={image.id}>
              <h4>{image.title}</h4>
              <img src={image.url} alt={`Image ${image.id}`} />
              <h4>{`Likes: ${image.likes}`}</h4>
            </div>
          )
        })
      )}
    </div>
  )
}
