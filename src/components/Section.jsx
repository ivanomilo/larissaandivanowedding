export function TwoPanelSection({leftContent, rightContent, leftBigger}){ 
    const leftProportion= leftBigger ? "md:w-[66%]" : "md:w-[33%]"
    const rightProportion= leftBigger ? "md:w-[33%]" : "md:w-[66%]"
    return (
       <div className="flex flex-col md:flex-row w-full border border-amber-600" >
           <div className={"w-full m-auto " +leftProportion}>{leftContent}</div> 
           <div className={"w-full m-auto " +rightProportion}>{rightContent}</div>
       </div>
       
    )
}