import { useState, useEffect } from 'react'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'
import PlayerHead from '../player-head'
import Track from '../track'

export default function Player({ isHighlighted }) {
  const [paused, setPaused] = useState(true)
  const [position, setPosition] = useState(0)

  const tracksLength = 16
  const bpm = 120
  const msPerBeat = (1000 * 60) / (bpm * 4)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, msPerBeat)

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
    <section className="player">
      <table>
        <thead>
          <PlayerHead {...{ tracksLength, paused, handleLeftClick, handlePlayPause, handleRightClick, position, handleInputChange }} />
        </thead>
        <tbody>
          {Object.keys(moveMap).map(cubeSound => (
            <Track
              key={cubeSound}
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
