export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          <a href="https://caniuse.com/#feat=web-bluetooth">Web Bluetooth support</a> is currently limited to Chrome, Opera, and Edge.
        </p>
        <p>
          Built with NextJS, React, TypeScript, Howler, ThemeUI, Web Bluetooth API, Web Audio API, Giiker API, Netlify, accessibilty, and
          imagination. See the source code on <a href="https://github.com/chrisnager/smart-cube">GitHub</a>.
        </p>
        <p>
          &copy; {new Date().getFullYear()} &middot; Crafted by <a href="http://chrisnager.com">Chris Nager</a>
        </p>
      </div>
    </footer>
  )
}
