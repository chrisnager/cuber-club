export default function PlayerControls({ handlePlayPause, paused, handleLeftClick, handleRightClick }) {
  return (
    <div>
      <button onClick={handlePlayPause}>{paused ? '▶ (B)' : '❚❚ (B)'}</button>
      <button disabled={!paused} onClick={handleLeftClick}>
        ↤ (D)
      </button>
      <button disabled={!paused} onClick={handleRightClick}>
        (D') ↦
      </button>
    </div>
  )
}
