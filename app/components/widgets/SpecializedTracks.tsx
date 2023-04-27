"use client"
import QuaterBox from "../shared/QuarterBox"
import Wrapper from "../shared/Wrapper"
import Image from "next/image"
//Images
import Web3Img from "../../assets/images/metaverse.webp"
import AiImg from "../../assets/images/ai.webp"
import CloudImg from "../../assets/images/cloud.webp"
import AcImg from "../../assets/images/ambient.webp"
import BioImg from "../../assets/images/genomics.webp"
import NpaImg from "../../assets/images/network.webp"

import { useState } from "react"

export const programsData =[
    {
        slug:"wmd",
        header:"Web 3.0 (Blockchain) and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image:Web3Img,
        quarters:[
            {
                header:"Quarter IV",
                description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number:4
            },
            {
                header:"Quarter V",
                description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number:5
            }
        ]
    },
    {
        slug:"ai",
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:AiImg,
        quarters:[
            {
                header:"Quarter IV",
                description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number:4
            },
            {
                header:"Quarter V",
                description:"AI-361: Deep Learning and MLOps",
                number:5
            }
        ]
    },
    {
        slug:"cnd",
        header:"Cloud-Native Computing Specialization",
        description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image:CloudImg,
        quarters:[
            {
                header:"Quarter IV",
                description:"CN-351: Certified Kubernetes Application Developer (CKAD)",
                number:4
            },
            {
                header:"Quarter V",
                description:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number:5
            }
        ]
    },
    {
        slug:"ac",
        header:"Ambient Computing and IoT Specialization",
        description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image:AcImg,
        quarters:[
            {
                header:"Quarter IV",
                description:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number:4
            },
            {
                header:"Quarter V",
                description:"AC-361: Embedded Programming using C and Rust",
                number:5
            }
        ]
    },
    {
        slug:"bio",
        header:"Genomics and Bioinformatics Specialization",
        description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image:BioImg,
        quarters:[
            {
                header:"Quarter IV",
                description:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number:4
            },
            {
                header:"Quarter V",
                description:"AC-361: Embedded Programming using C and Rust",
                number:5
            }
        ]
    },
    {
        slug:"npa",
        header:"Network Programmability and Automation Specialization",
        description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image:NpaImg,
        quarters:[
            {
                header:"Quarter IV",
                description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number:4
            },
            {
                header:"Quarter V",
                description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number:5
            }
        ]
    }
]

const SpecializedTracks = ()=>{
    const [selectedItem,setSelectedItem] = useState("wmd")
    const selectedItemData = programsData.find((item)=> item.slug === selectedItem)
    return (
        <section>
            <Wrapper>
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h1>
                    <p className="mt-3 text-lg text-slate-600 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>
                <div className="mt-10 flex flex-col-reverse md:flex-row gag-x-6 gap-y-6">
                    {/* Content Left */}
                    <div className="shadow-xl sticky top-28 self-start border rounded-xl basis-8/12 border-slate-200 py-8 px-8">
                        <h4 className="text-primary text-lg font-medium">Specialized Track</h4>
                        <h3 className="text-2xl font-semibold ">{selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
                        <button className="text-primary text-xl mt-4 underline flex gap-2 items-end">Learn More
                            <svg className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
                            </svg>
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            {
                                selectedItemData?.quarters.map((item)=>{
                                    return (
                                        <QuaterBox 
                                            key={item.number}
                                            description={item.description}
                                            header={item.header}
                                            number={item.number}
                                            haveBorder={false}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* Content Right */}
                    <div className="px-4 py-6 space-y-4 basis-4/12 flex-1">
                        {
                            programsData.map((item,i)=>{
                                return(
                                    <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className="flex items-center gap-x-4 cursor-pointer">
                                        <div className="flex-shrink-0 h-24 w-48 ">
                                            {/*<div className="w-40 h-24 rounded bg-red-600"></div>*/}
                                        <Image key={item.slug} src={item.image} alt={item.header} className="h-24 object-cover rounded-lg" />
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-medium">Specialized Program</h4>
                                            <h3 className="text-xl font-semibold">{item.header}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default SpecializedTracks