export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          <a href="https://caniuse.com/#feat=web-bluetooth">Web Bluetooth support</a> is currently limited to Chrome, Opera, and Edge.
        </p>
        <p>
          &copy; {new Date().getFullYear()} &middot; Crafted by <a href="http://chrisnager.com">Chris Nager</a>
        </p>
      </div>
    </footer>
  )
}
