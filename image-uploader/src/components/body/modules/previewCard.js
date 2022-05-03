import React, { useEffect } from 'react'

import {
  PreviewContainer,
  CardTitle,
  PreviewList,
  NewImgContainer,
  ImgContainer,
  NewImg,
  ImgData,
  ImgName,
  UploadButton,
  ButtonText,
  CardSubtitle
} from '../styles'

export const PreviewCard = ({
  files,
  convertBytesToKb,
  copy,
  setCopy,
  copyUrl
}) => {
  useEffect(() => {
    setTimeout(() => setCopy({ ok: false, msg: '' }), 10000)
  }, [copy, setCopy])

  return (
    <PreviewContainer>
      <CardTitle> To Upload </CardTitle>
      <CardSubtitle> {copy.ok ? copy.msg : null} </CardSubtitle>
      <PreviewList>
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName]
          let isImageFile = file.type.split('/')[0] === 'image'
          let size = convertBytesToKb(file.size)
          const url = URL.createObjectURL(file)

          return (
            <NewImgContainer key={fileName}>
              <ImgContainer>
                {isImageFile && (
                  <NewImg src={url} alt={`file preview ${index}`} />
                )}
              </ImgContainer>
              <ImgData isImageFile={isImageFile}>
                <ImgName> Size: {size} Kb</ImgName>
                <UploadButton onClick={() => copyUrl(url)}>
                  <ButtonText> Copy Link </ButtonText>
                </UploadButton>
              </ImgData>
            </NewImgContainer>
          )
        })}
      </PreviewList>
    </PreviewContainer>
  )
}
