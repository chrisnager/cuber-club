import { FC, useState, useEffect } from 'react'
import { soundPack, tracksLength, msPerBeat } from '../../constants/configuration'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'
import PlayerControls from '../player-controls'
import PlayerHead from '../player-head'
import Track from '../track'

interface PlayerProps {
  isHighlighted: boolean
  lastTurn: string
  sequence: string[]
  updateSong: () => void
  song: {}
}

const Player: FC<PlayerProps> = ({ isHighlighted, lastTurn, sequence, updateSong, song }) => {
  const [paused, setPaused] = useState(true)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => (position === tracksLength - 1 ? 0 : position + 1))
    }, msPerBeat)

    if (paused) clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [setPosition, paused])

  useEffect(() => {
    if (lastTurn === 'B') handlePlayPause()
    if (lastTurn === 'D') handleLeftClick()
    if (lastTurn === "D'") handleRightClick()
  }, [lastTurn, sequence])

  const handlePlayPause = () => {
    setPaused(!paused)
  }

  const handleLeftClick = () => {
    setPosition(position - 1)
  }

  const handleRightClick = () => {
    setPosition(position + 1)
  }

  const handleInputChange = ({ target: { value } }) => {
    setPosition(+value)
  }

  // TODO: Do I need a <form /> wrapper?

  return (
    <section className="player">
      <PlayerControls {...{ handlePlayPause, paused, handleLeftClick, handleRightClick }} />
      <div>
        <table>
          <thead>
            <PlayerHead {...{ tracksLength, paused, position, handleInputChange }} />
          </thead>
          <tbody>
            {Object.keys(moveMap).map(cubeSound => (
              <Track
                key={cubeSound}
                move={cubeSound}
                label={moveMap[cubeSound]}
                sound={cubeSounds[soundPack][moveMap[cubeSound]]}
                {...{ tracksLength, position, isHighlighted, lastTurn, setSong: updateSong, song }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Player
