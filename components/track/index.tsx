import Selection from '../selection'

export default function Track({ move, label, tracksLength, position, sound, isHighlighted, lastTurn }) {
  return (
    <tr>
      <td className={move === isHighlighted ? 'highlight' : ''}>
        <b>{move}</b>
      </td>
      <td className={move === isHighlighted ? 'highlight' : ''}>{label}</td>
      {Array(tracksLength)
        .fill(1)
        .map((_, index) => (
          <Selection key={move + index} {...{ position, index, sound, move, lastTurn }} />
        ))}
    </tr>
  )
}
