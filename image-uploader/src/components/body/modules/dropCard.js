import React from 'react'

import {
  CardContainer,
  CardTitle,
  CardSubtitle,
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
      <Drop>
        <DropImg src={dropImg} />
        <DropText> Drag and Drop your image here </DropText>
      </Drop>
      <DropOr> or </DropOr>
      <UploadButton type='button' onClick={handleUpload}>
        <ButtonText> Upload an image </ButtonText>
      </UploadButton>
      <FileInput
        type='file'
        ref={dropRef}
        title=''
        value=''
        onChange={handleNewUpload}
      />
    </CardContainer>
  )
}
