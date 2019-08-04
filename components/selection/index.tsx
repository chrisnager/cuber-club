import { useState } from 'react'

export default function Selection({ position, index, sound }) {
  const [checked, setChecked] = useState(false)

  if (position === index && checked) {
    sound.sound.play()
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  const handleClick = () => {
    if (!checked) {
      sound.sound.play()
    }
  }

  return (
    <td key={index} className={`selection ${checked ? 'highlight' : ''}`}>
      <input type="checkbox" onChange={handleChange} onClick={handleClick} {...{ checked }} />
    </td>
  )
}
