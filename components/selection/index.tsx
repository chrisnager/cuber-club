import { useState, useEffect } from 'react'

export default function Selection({ position, index, sound, move, lastTurn, setSong, song }) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (move === lastTurn && position === index) {
      handleChange()
    }
  }, [lastTurn])

  if (position === index && checked) {
    sound.sound.play()
  }

  const handleChange = () => {
    setChecked(!checked)

    // setSong({
    //   song: {
    //     ...song,
    //     song[move]: [
    //       ...song[move],
    //       song[move][index]: !song[move][index]
    //     ]
    //   }
    // })
  }

  const handleClick = () => {
    if (!checked) {
      sound.sound.play()
    }
  }

  return (
    <td key={index} className={`selection ${position === index ? 'highlight' : ''}`}>
      <input type="checkbox" onChange={handleChange} onClick={handleClick} {...{ checked }} />
    </td>
  )
}
