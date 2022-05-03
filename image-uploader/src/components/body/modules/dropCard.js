import React from 'react'

import {
  CardContainer,
  CardTitle,
  CardSubtitle,
  DropContainer,
  Drop,
  DropImg,
  DropText,
  DropOr,
  UploadButton,
  ButtonText,
  FileInput
} from '../styles'
import dropImg from '../../../assets/image.svg'

export const DropCard = ({ dropRef, handleUpload, handleNewUpload }) => {
  return (
    <CardContainer>
      <CardTitle> Upload your image </CardTitle>
      <CardSubtitle> File should be Jpg, Jpeg, Png...</CardSubtitle>
      <DropContainer>
        <Drop>
          <DropImg src={dropImg} />
          <DropText> Drag and Drop your image here </DropText>
        </Drop>
        <FileInput
          type='file'
          ref={dropRef}
          title=''
          value=''
          onChange={handleNewUpload}
        />
      </DropContainer>
      <DropOr> or </DropOr>
      <UploadButton type='button' onClick={handleUpload}>
        <ButtonText> Upload an image </ButtonText>
      </UploadButton>
    </CardContainer>
  )
}
