export default function PlayerBar() {
  return (
    <div className="am-player d-lg-none" role="contentinfo" aria-label="Player">
      <div className="am-player-left">
        <div className="am-player-icon" aria-hidden="true">
          <i className="bi bi-music-note" />
        </div>
      </div>

      <div className="am-player-right">
        <button className="am-icon-btn" aria-label="Play">
          <i className="bi bi-play-fill" />
        </button>
        <button className="am-icon-btn" aria-label="Next">
          <i className="bi bi-skip-forward-fill" />
        </button>
      </div>
    </div>
  )
}
