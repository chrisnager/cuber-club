import Link from 'next/link'
import Routes from '../constants/routes'

function Home() {
  return <Link href={Routes.dj}>Cube DJ</Link>
}

export default Home
