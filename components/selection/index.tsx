import { useState } from 'react'

export default function Selection({ sound }) {
  const [checked, setChecked] = useState(false)

  if (checked) {
    sound.sound.play()
  }

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  return (
    <td key={Math.random()} className={checked ? 'highlight' : ''}>
      <input type="checkbox" onChange={handleCheckboxChange} {...{ checked }} />
    </td>
  )
}
