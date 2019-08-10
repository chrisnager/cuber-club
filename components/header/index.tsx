import { useThemeUI } from 'theme-ui'

export default function Header() {
  const { theme } = useThemeUI()

  return (
    <header>
      <div>
        <h1>
          <img width={64} src="/static/images/logo.svg" alt="Logo" /> Cube DJ
        </h1>
        <p>
          Use your <a href="https://www.thecubicle.com/products/giiker-super-cube-i3s">Bluetooth-enabled smart cube</a> as a MIDI input
          device.
          <sup>
            <a href="#1">1</a>
          </sup>
        </p>
        <img src="https://media.giphy.com/media/vqYM1Ei0CcepW/giphy.gif" alt="Cube in motion" />
      </div>
    </header>
  )
}
