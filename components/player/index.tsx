import { useState, useEffect } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import Track from '../track'

export default function Player() {
  const [paused, setPaused] = useState(true)
  const [position, setPosition] = useState(0)

  const tracksLength = 16

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, 500)

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
        table {
          border-collapse: collapse;
        }

        th {
          text-align: left;
        }

        th,
        td {
          padding: 0;
          white-space: nowrap;
        }

        input[type='range'] {
          width: 100%;
        }

        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>

      <div>
        <button disabled={!paused} onClick={handleLeftClick}>
          Left
        </button>
        <button disabled={!paused} onClick={handleRightClick}>
          Right
        </button>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>
              <button onClick={handlePlayPause}>{paused ? 'Play' : 'Pause'}</button>
            </th>
            <th colSpan={tracksLength}>
              <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cubeSounds).map(cubeSound => (
            <Track key={Math.random()} label={cubeSound} sound={cubeSounds[cubeSound]} {...{ tracksLength, position }} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
