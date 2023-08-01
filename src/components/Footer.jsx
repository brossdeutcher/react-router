import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
      <nav>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/colors">Colors</Link>
        <Link className='nav-link' to="/shapes">Shapes</Link>
      </nav>
    </>
  )
}

export default Footer;