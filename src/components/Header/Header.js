import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import Logo from './Logo.png'
import './Header.css'

const Header = () => {
  const { homepage } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <img src={Logo} alt="BB"/>
          </a>
        ) : (
          <img src={Logo} alt="BB"/>
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
