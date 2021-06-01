import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button'
import Text from '../Text'
import Logo from './Logo'
import NavLinks from './NavLinks'

const Nav = () => {
  return (
    <div className="sticky">
      <nav className="flex relative h-[10vh] items-center">
        <div className="absolute left-[7rem]">
          <Logo>Logo</Logo>
        </div>
        <div className="container flex justify-between h-full items-center">
          <NavLinks />
          <div>
            <a
              href="#"
              className="mr-10 font-semibold hover:text-primary link-transition"
            >
              <i className="mr-4">
                <FontAwesomeIcon icon="map-marker-alt" />
              </i>
              Find a store
            </a>
            <Button className="border-solid border-black mr-4 hover:bg-gray-100">
              Sign in
            </Button>
            <Button className="border-solid border-black text-white bg-black hover:bg-gray-700" disabled>
              Join now
            </Button>
          </div>
        </div>
      </nav>
      <div className="h-[50px] bg-primary-dark w-full">
        <div className="container flex items-center h-full">
          <p className="font-bold text-white tracking-widest">
            STARBUCKS<sup>®</sup> REWARDS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nav
