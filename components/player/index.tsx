import { useState } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'
import Track from '../track'

export default function Player() {
  const [isEnabled, setsIsEnabled] = useState(true)

  const tracksLength = 8

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
              <input type="range" max={tracksLength - 1} />
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cubeSounds).map(cubeSound => (
            <Track key={Math.random()} label={cubeSound} sound={cubeSounds[cubeSound]} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
