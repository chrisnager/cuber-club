/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default function Header() {
  return (
    <header
      sx={{
        fontWeight: 'bold',
        fontSize: 4,
        color: 'primary'
      }}
    >
      <div>
        <Styled.h1>
          <img src="/static/images/logo.svg" alt="Logo" /> Cube DJ
        </Styled.h1>
        <Styled.p>
          Use your <a href="https://www.thecubicle.com/products/giiker-super-cube-i3s">Bluetooth-enabled smart cube</a> as a MIDI input
          device.
        </Styled.p>
        <img src="https://media.giphy.com/media/vqYM1Ei0CcepW/giphy.gif" alt="Cube in motion" />
      </div>
    </header>
  )
}
