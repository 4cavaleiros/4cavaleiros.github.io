import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

import HLS from 'hls.js'

const dataStream = '/video/stream/video.m3u8'

const Video = styled.video`
  width: 100%;
  height: 100%;
`

function Demo() {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoRef = ref.current
    if (videoRef) {
      if (videoRef.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.src = dataStream
      } else if (HLS.isSupported()) {
        const hls = new HLS()
        hls.loadSource(dataStream)
        hls.attachMedia(videoRef)
      }
    }
  }, [])

  const data = useStaticQuery(graphql`
    query {
      fallback: file(relativePath: { eq: "fallback.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Video ref={ref} autoPlay loop controls={false} muted poster={data.fallback.childImageSharp.fluid.src} /> 
  )
}

export default Demo