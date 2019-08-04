export default function Track({ label, tracksLength, sound, position }) {
  return (
    <tr>
      <td>{label}</td>
      {Array(tracksLength)
        .fill(1)
        .map((_, index) => (
          <td key={Math.random()} className={index === position ? 'highlight' : ''}>
            <input type="checkbox" />
          </td>
        ))}
    </tr>
  )
}
