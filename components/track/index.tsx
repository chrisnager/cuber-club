import { useState } from 'react'

export default function Track({ label, sound }) {
  const [isEnabled, setsIsEnabled] = useState(true)

  const tracksLength = 8

  return (
    <tr>
      <td>{label}</td>
      {Array(tracksLength)
        .fill(1)
        .map(() => (
          <td key={Math.random()}>
            <input type="checkbox" />
          </td>
        ))}
    </tr>
  )
}
