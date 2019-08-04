import { useState } from 'react'

export default function Track({ label, tracksLength, sound, position }) {
  const [checked, setChecked] = useState(false)

  if (checked) {
    sound.sound.play()
  }

  const handleCheckboxChange = index => {
    setChecked(!checked)
  }

  return (
    <tr>
      <td>{label}</td>
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
