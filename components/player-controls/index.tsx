export default function PlayerControls({ handlePlayPause, paused, handleLeftClick, handleRightClick }) {
  return (
    <div>
      <button title={paused ? 'Play' : 'Pause'} onClick={handlePlayPause}>
        {paused ? (
          <>
            <Play /> <span>(B)</span>
          </>
        ) : (
          <>
            <Pause /> <span>(B)'</span>
          </>
        )}
      </button>
      <button title="Move left" disabled={!paused} onClick={handleLeftClick}>
        <Previous /> <span>(D)</span>
      </button>
      <button title="Move right" disabled={!paused} onClick={handleRightClick}>
        <Next /> <span>(D')</span>
      </button>
    </div>
  )
}

const iconConfig = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: '#000',
  stroke: '#000',
  strokeWidth: 0.5,
  style: { marginLeft: 8 }
}

function Play() {
  return (
    <svg {...iconConfig}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function Pause() {
  return (
    <svg {...iconConfig}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  )
}

function Previous() {
  return (
    <svg {...iconConfig}>
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  )
}

function Next() {
  return (
    <svg {...iconConfig}>
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}
