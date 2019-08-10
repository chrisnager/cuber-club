export default function PlayerControls({ handlePlayPause, paused, handleLeftClick, handleRightClick }) {
  return (
    <div>
      <button title={paused ? 'Play' : 'Pause'} onClick={handlePlayPause}>
        {paused ? '▶ (B)' : '❚❚ (B)'}
      </button>
      <button title="Move left" disabled={!paused} onClick={handleLeftClick}>
        ↤ (D)
      </button>
      <button title="Move right" disabled={!paused} onClick={handleRightClick}>
        (D') ↦
      </button>
    </div>
  )
}
