import {SVGProps} from "react";

const Cancel = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 14.55L9 9.3M9 9.3L14.25 4.05M9 9.3L3.75 4.05M9 9.3L14.25 14.55" stroke="black"
                  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Cancel;