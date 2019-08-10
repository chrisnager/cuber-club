export default function PlayerHead({
  tracksLength,
  paused,
  handleLeftClick,
  handlePlayPause,
  handleRightClick,
  position,
  handleInputChange
}) {
  return (
    <>
      <tr>
        <th colSpan={2}>
          <button onClick={handlePlayPause}>{paused ? 'Play (B)' : 'Pause (B)'}</button>
        </th>
        <th colSpan={tracksLength}>
          <div>
            <button disabled={!paused} onClick={handleLeftClick}>
              ↤ (D)
            </button>
            <button disabled={!paused} onClick={handleRightClick}>
              (D') ↦
            </button>
          </div>
        </th>
      </tr>
      <tr>
        <th colSpan={2}>Moves</th>
        <th colSpan={tracksLength}>
          <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
        </th>
      </tr>
    </>
  )
}
