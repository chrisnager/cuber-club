import Link from 'next/link'
import Routes from '../constants/routes'

export default function Home() {
  return <Link href={Routes.dj}>Cube DJ</Link>
}
