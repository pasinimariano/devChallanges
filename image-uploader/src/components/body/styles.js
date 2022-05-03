import styled from 'styled-components'

const flexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const titles = styled.h2`
  color: #f2f2f2;
  text-align: center;
`

const Card = styled(flexCenter)`
  background-color: #383838;
  height: 75%;
  border-radius: 14px;
  box-shadow: 11px 11px 0px 0px rgba(0, 0, 0, 0.3);
  flex-direction: column;
`

export const Container = styled.div`
  background-color: #066163;
  height: 88vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CardContainer = styled(Card)`
  width: 25%;
`

export const CardTitle = styled(titles)`
  margin: 40px 0 25px 0;
`

export const CardSubtitle = styled(titles)`
  font-size: 17px;
  margin-bottom: 40px;
`

export const Drop = styled(flexCenter)`
  background-color: #505050;
  width: 70%;
  height: 50%;
  border: 4px dashed rgba(100, 100, 100, 1);
  border-radius: 14px;
  flex-direction: column;
`

export const DropImg = styled.img`
  height: 40%;
`

export const DropText = styled.h2`
  font-size: 17px;
  margin-top: 50px;
  color: #383838;
`
export const DropOr = styled(titles)`
  font-size: 17px;
`

export const UploadButton = styled.button`
  background-color: #505050;
  height: 40px;
  width: 50%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  $: hover {
    background-color: red;
  }
`
export const ButtonText = styled(titles)`
  font-size: 15px;
`

export const FileInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const PreviewContainer = styled(Card)`
  width: 55%;
`

export const PreviewList = styled(flexCenter)`
  background-color: #505050;
  height: 77%;
  width: 95%;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const NewImgContainer = styled(Card)`
  background-color: #cdbe78;
  width: 25%;
  height: 55%;
  margin: 2%;
  flex-direction: column;
`

export const ImgContainer = styled(flexCenter)`
  height: 70%;
  margin-bottom: 10px;
`

export const NewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ImgData = styled.div`
  width: 80%;
  height: 20%;
`

export const ImgName = styled.h2`
  font-size: 12px;
  font-weight: bold;
  color: #383838;
`
