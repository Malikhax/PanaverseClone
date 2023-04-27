import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import LogoImg from "../../../public/logo.webp"
import Link from "next/link"

const FooterSection =()=>{
    return(
        <section>
            <Wrapper>
                <div className="mt-16 mb-4 flex flex-col gap-y-4 md:flex-row space-x-2 border-t-2 border-b-2 py-10">
                    <div className="max-w-screen-md">
                        <Image src={LogoImg} alt="logo" />
                        <p>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold">Programs</h1>
                        <nav>
                            <ul className='font-med space-y-2 pt-2'>
                                <li><Link href="#">Web 3.0 and Metaverse Developer</Link></li>
                                <li><a href="#">Artificial Intelligence</a></li>
                                <li><a href="#">Cloud-Native Computing</a></li>
                                <li><Link href="#">Ambient Computing and IoT</Link></li>
                                <li><Link href="#">Genomics and Bioinformatics</Link></li>
                                <li><Link href="#">Network Programmability and Automation</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <h1 className="font-bold">Pages</h1>
                        <nav>
                            <ul className='font-med space-y-2 pt-2'>
                            <li><Link href="#">Home</Link></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">About</a></li>
                            <li><Link href="#">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default FooterSection