import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"
import Logo from "/public/logo.webp"
const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <Wrapper>
        <div className="flex justify-between items-center py-4 px-2 bg-white">
          <Image src={Logo} alt="Panaverse dao logo" />
          <nav>
            <ul className='flex space-x-8 font-med'>
              <li><Link href="/">Home</Link></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">About</a></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
} 
export default Header;
