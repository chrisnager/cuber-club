import { useState, useEffect } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'
import Track from '../track'

export default function Player() {
  const [position, setPosition] = useState(0)

  const tracksLength = 8

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, 500)

    return () => {
      clearInterval(interval)
      setPosition(0)
    }
  }, [setPosition])

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th colSpan={tracksLength}>
              <style jsx>{`
                input[type='range'] {
                  width: 100%;
                }
              `}</style>
              <input type="range" max={tracksLength - 1} value={position} onChange={() => console.log({ position })} />
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
