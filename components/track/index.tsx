import Selection from '../selection'

export default function Track({ move, label, tracksLength, position, sound, isHighlighted, lastTurn }) {
  return (
    <tr>
      <td className={`frozen-column ${move === isHighlighted ? 'highlight' : ''}`}>
        <b>{move}</b> <span>{label}</span>
      </td>
      {Array(tracksLength)
        .fill(1)
        .map((_, index) => (
          <Selection key={move + index} {...{ position, index, sound, move, lastTurn }} />
        ))}
    </tr>
  )
}
