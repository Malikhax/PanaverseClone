import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import heroImg from "../../assets/images/hero.jpg"
import Button from "../shared/Button"
const Hero = () =>{
    return(
        <section>
            <Wrapper>
                {/* Left Side*/}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1">
                        <h4 className="text-teal-700 font-semibold text-lg mt-4">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-xl">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </p>
                        <p className="mt-6 text-lg text-slate-600 max-w-xl">    
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies         
                        </p>
                        <div className="mt-4">
                            <Button text={"Learn More"}/>
                        </div>
                    </div>
                    {/* Right Side*/}
                    <div className="flex-1 pt-10">
                        <Image src={heroImg} alt="Hero Poster" className="rounded-3xl"/>
                    </div>
                </div>
            </Wrapper>
        </section>     
    )
}
export default Hero