import React from 'react'

import { Statement } from './statement'
import { DropCard } from './modules/dropCard'
import { PreviewCard } from './modules/previewCard'
import { Container } from './styles'

export const Body = () => {
  const {
    files,
    dropRef,
    handleUpload,
    handleNewUpload,
    convertBytesToKb,
    copyUrl,
    copy,
    setCopy
  } = Statement()

  return (
    <Container>
      <DropCard
        dropRef={dropRef}
        handleUpload={handleUpload}
        handleNewUpload={handleNewUpload}
      />
      <PreviewCard
        files={files}
        convertBytesToKb={convertBytesToKb}
        copy={copy}
        setCopy={setCopy}
        copyUrl={copyUrl}
      />
    </Container>
  )
}
