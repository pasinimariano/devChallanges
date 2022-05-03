import { useState, useRef } from 'react'

export const Statement = () => {
  const [files, setFiles] = useState({})
  const dropRef = useRef(null)

  const maxBytesFileSize = 54000000
  const KiloBytes = 1000

  const convertBytesToKb = bytes => {
    return Math.round(bytes / KiloBytes)
  }

  const handleUpload = () => {
    dropRef.current.click()
  }

  const addNewFiles = newFile => {
    newFile[0].size <= maxBytesFileSize
      ? (files[newFile[0].name] = newFile[0])
      : alert(`${newFile[0].name} exceeds the maximum bytes allowed`)

    return { ...files }
  }

  const handleNewUpload = event => {
    const { files: newFiles } = event.target

    if (newFiles.length) {
      let updateFiles = addNewFiles(newFiles)
      setFiles(updateFiles)
    }
  }

  return {
    files,
    dropRef,
    maxBytesFileSize,
    convertBytesToKb,
    handleUpload,
    handleNewUpload
  }
}
