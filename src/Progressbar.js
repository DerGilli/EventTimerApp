import React, { useEffect } from 'react'
import useStorage from './hooks/useStorage';
import './css/ProgressBar.css'

const Progressbar = ({ file, setFile, setImageUrl }) => {

  const { url, progress } = useStorage(file)
  console.log(progress, url)

  useEffect(() => {
    if (url) {
      setImageUrl(url)
      setFile(null)
    }
  }, [url, setFile, setImageUrl])

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}
export default Progressbar;