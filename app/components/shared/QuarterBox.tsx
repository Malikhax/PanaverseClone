import { FC } from "react";

interface IProps{
    header:string;
    description:string;
    number:number;
    haveBorder?:boolean;
}

const QuaterBox:FC<IProps> = ({header,description,number,haveBorder=true})=>{
    return (
        <div className={`rounded flex-1 px-8 py-16 relative flex flex-col justify-center ${haveBorder===true ? "border":""}`}> {/* haveBorder && "border" instance of the previous code */}
            <h4 className="font-bold text-lg">{header}</h4>
            <p className="mt-2 text-slate-600">{description}</p>
            <span className="absolute -top-10 right-10 text-[150px] font-bold text-gray-200 -z-10">{number}</span>
        </div>
    )
}

export default QuaterBox