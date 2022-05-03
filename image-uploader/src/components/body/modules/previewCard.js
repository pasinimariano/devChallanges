import React from 'react'

import {
  PreviewContainer,
  CardTitle,
  PreviewList,
  NewImgContainer,
  ImgContainer,
  NewImg,
  ImgData,
  ImgName
} from '../styles'

export const PreviewCard = ({ files, convertBytesToKb }) => {
  return (
    <PreviewContainer>
      <CardTitle> To Upload </CardTitle>
      <PreviewList>
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName]
          let isImageFile = file.type.split('/')[0] === 'image'
          let size = convertBytesToKb(file.size)

          return (
            <NewImgContainer key={fileName}>
              <ImgContainer>
                {isImageFile && (
                  <NewImg
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${index}`}
                  />
                )}
              </ImgContainer>
              <ImgData isImageFile={isImageFile}>
                <ImgName>{file.name}</ImgName>
                <ImgName> Size: {size} kb</ImgName>
              </ImgData>
            </NewImgContainer>
          )
        })}
      </PreviewList>
    </PreviewContainer>
  )
}
