import { FC } from "react"

{/* FC:functional components tell react that Wrapper is FC <children is object and its type is ReateNode> */}
const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <div className="max-w-screen-2xl mx-auto px-4">
            {children}
        </div>
    )
}

export default Wrapper