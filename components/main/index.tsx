import { useState } from 'react'
import Giiker from '../../scripts/giiker'
import Player from '../player'

export default function Main() {
  const [isEnabled, setsIsEnabled] = useState(true)
  const [label, setLabel] = useState('Connect cube')
  const [sequence, setSequence] = useState([])
  const [isHighlighted, setIsHighlighted] = useState(null)

  const updateLocation = move => {
    window.history.replaceState({}, null, `?sequence=${sequence.join('')}${move}`)
  }

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
      updateLocation(move.notation)
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

        <Player lastTurn={sequence[sequence.length - 1]} {...{ isHighlighted, sequence }} />

        <h2>Your moves</h2>
        <p>Hold cube with white on top and green facing you.</p>
        <div className="sequence">
          {sequence.map(move => (
            <span key={`sequence:${move}`} className={`${move === isHighlighted ? 'highlight' : ''}`}>
              {move}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
