import Halo from '../../components/halo'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import { ThemeProvider } from 'theme-ui'
import theme from '../../constants/theme'

export default function Dj() {
  return (
    <ThemeProvider {...{ theme }}>
      <Halo />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}
