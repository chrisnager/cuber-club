import { useState } from 'react'
import Giiker from '../../scripts/giiker'
import cubeSounds from '../../constants/cube-sounds'
import moveMap from '../../constants/move-map'

export default function Main() {
  const [isEnabled, setsIsEnabled] = useState(true)
  const [label, setLabel] = useState('Connect cube')
  const [sequence, setSequence] = useState('')
  const [isHighlighted, setIsHighlighted] = useState(null)

  const playSound = move => {
    cubeSounds[moveMap[move]].sound.play()
  }

  const handleConnectClick = async () => {
    setsIsEnabled(false)
    const giiker = await Giiker.connect()
    setLabel('Connected')

    giiker.on('move', move => {
      // TODO: Update URL to include sequence
      // window.location.href += sequence

      setSequence(`${sequence} ${move.notation}`)
      setIsHighlighted(move.notation)
      playSound(move.notation)

      setTimeout(() => {
        setIsHighlighted(null)
      }, 500)
    })
  }

  return (
    <main>
      <div>
        <button onClick={handleConnectClick} disabled={!isEnabled}>
          {label}
        </button>

        <h2>Your moves</h2>
        <p>Hold cube with white on top and green facing you.</p>
        <div className="sequence">{sequence}</div>

        <h2>Sounds</h2>
        <ul className="sounds">
          {Object.keys(moveMap).map(moveName => (
            <li key={moveName} className={`${moveName.replace("'", '-')} ${moveName === isHighlighted ? 'highlight' : ''}`}>
              <b>{moveName}</b>: {moveMap[moveName]}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
