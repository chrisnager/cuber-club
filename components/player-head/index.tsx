export default function PlayerHead({ tracksLength, paused, position, handleInputChange }) {
  return (
    <tr>
      <th colSpan={2} className="frozen-column">
        Moves
      </th>
      <th colSpan={tracksLength}>
        <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
      </th>
    </tr>
  )
}
