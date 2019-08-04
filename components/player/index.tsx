import { useState, useEffect } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'
import Track from '../track'

export default function Player({ isHighlighted }) {
  const [paused, setPaused] = useState(true)
  const [position, setPosition] = useState(0)

  const tracksLength = 16
  const bpm = 120

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, bpm)

    if (paused) clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [setPosition, paused])

  const handleLeftClick = () => {
    setPosition(position - 1)
  }

  const handleRightClick = () => {
    setPosition(position + 1)
  }

  const handlePlayPause = () => {
    setPaused(!paused)
  }

  const handleInputChange = ({ target: { value } }) => {
    setPosition(+value)
  }

  return (
    <section>
      <style jsx>{`
        section {
          margin-top: 2rem;
        }

        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>Moves</th>
            <th colSpan={tracksLength}>
              <div>
                <button disabled={!paused} onClick={handleLeftClick}>
                  {'<'}
                </button>
                <button onClick={handlePlayPause}>{paused ? 'Play' : 'Pause'}</button>
                <button disabled={!paused} onClick={handleRightClick}>
                  {'>'}
                </button>
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={2}>-------------</th>
            <th colSpan={tracksLength}>
              <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(moveMap).map(cubeSound => (
            <Track
              key={Math.random()}
              move={cubeSound}
              label={moveMap[cubeSound]}
              sound={cubeSounds[moveMap[cubeSound]]}
              {...{ tracksLength, position, isHighlighted }}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
