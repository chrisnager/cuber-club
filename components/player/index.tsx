import { useState, useEffect } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import Track from '../track'

export default function Player() {
  const [paused, setPaused] = useState(false)
  const [position, setPosition] = useState(0)

  const tracksLength = 8

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, 500)

    if (paused) clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [setPosition, paused])

  const handlePlayPause = () => {
    setPaused(!paused)
  }

  const handleInputChange = ({ target: { value } }) => {
    setPosition(+value)
  }

  return (
    <section>
      <button onClick={handlePlayPause}>{paused ? 'Play' : 'Pause'}</button>
      <table>
        <thead>
          <tr>
            <th />
            <th colSpan={tracksLength}>
              <style jsx>{`
                input[type='range'] {
                  width: 100%;
                }
              `}</style>
              <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cubeSounds).map((cubeSound, index) => (
            <Track key={Math.random()} label={cubeSound} sound={cubeSounds[cubeSound]} {...{ tracksLength, position }} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
