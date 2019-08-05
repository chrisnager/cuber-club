import { useState } from 'react'
import Giiker from '../../scripts/giiker'
import Player from '../player'

export default function Main() {
  const [isEnabled, setsIsEnabled] = useState(true)
  const [label, setLabel] = useState('Connect cube')
  const [sequence, setSequence] = useState([])
  const [isHighlighted, setIsHighlighted] = useState(null)

  // const updateLocation = move => {
  //   window.location.href += move
  // }

  const setAndRemoveHighlight = move => {
    setIsHighlighted(move)

    setTimeout(() => {
      setIsHighlighted(null)
    }, 500)
  }

  const handleConnectClick = async () => {
    setsIsEnabled(false)

    const giiker = await Giiker.connect()

    setLabel('Connected')

    giiker.on('move', move => {
      // TODO: Update URL to include sequence
      // updateLocation(move.notation)

      setSequence([...sequence, move.notation])
      setAndRemoveHighlight(move.notation)
    })
  }

  return (
    <main>
      <div>
        <button onClick={handleConnectClick} disabled={!isEnabled} className="connect">
          {label}
        </button>

        <Player lastTurn={sequence[sequence.length - 1]} {...{ isHighlighted }} />

        <h2>Your moves</h2>
        <p>Hold cube with white on top and green facing you.</p>
        <div className="sequence">
          {sequence.map(move => (
            <span key={`sequence:${move}`} className={`${move === isHighlighted ? 'highlight' : ''}`}>
              {move}
            </span>
          ))}
        </div>

        {/* <h2>Sounds</h2>
        <ul className="sounds">
          {Object.keys(moveMap).map(moveName => (
            <li key={moveName} className={`${moveName.replace("'", '-')} ${moveName === isHighlighted ? 'highlight' : ''}`}>
              <b>{moveName}</b>: {moveMap[moveName]}
            </li>
          ))}
        </ul> */}
      </div>
    </main>
  )
}
