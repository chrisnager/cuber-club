import { useState } from 'react'

export default function Track({ move, label, tracksLength, sound, position, isHighlighted }) {
  const [checked, setChecked] = useState(false)

  if (checked) {
    sound.sound.play()
  }

  const handleCheckboxChange = index => {
    setChecked(!checked)
  }

  return (
    <tr>
      <td className={move === isHighlighted ? 'highlight' : ''}>
        <b>{move}</b>
      </td>
      <td className={move === isHighlighted ? 'highlight' : ''}>{label}</td>
      {Array(tracksLength)
        .fill(1)
        .map((_, index) => (
          <td key={Math.random()} className={index === position ? 'highlight' : ''}>
            <input type="checkbox" onChange={index => handleCheckboxChange(index)} {...{ checked }} />
          </td>
        ))}
    </tr>
  )
}
