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
        <th colSpan={2}>Moves</th>
        <th colSpan={tracksLength}>
          <div>
            <button disabled={!paused} onClick={handleLeftClick}>
              ↤
            </button>
            <button onClick={handlePlayPause}>{paused ? 'Play' : 'Pause'}</button>
            <button disabled={!paused} onClick={handleRightClick}>
              ↦
            </button>
          </div>
        </th>
      </tr>
      <tr>
        <th colSpan={2}>-------------</th>
        <th colSpan={tracksLength}>
          <input disabled={!paused} type="range" max={tracksLength - 1} value={position} onChange={handleInputChange} />
        </th>
      </tr>
    </>
  )
}
