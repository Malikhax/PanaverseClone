import { FC } from "react"

const Button:FC<{text:string}> =(props)=>{
    return(
        <button className="bg-[#00616C] text-white px-7 py-4 rounded-full hover:shadow-lg
         text-lg font-medium hover:scale-105 duration-300
        ">
        {props.text}</button>
    )
}
export default Button