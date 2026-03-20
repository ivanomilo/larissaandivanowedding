export function TwoPanelSection({className, id, leftContent, rightContent, leftBigger}){ 
    const leftProportion= leftBigger ? "md:w-[60%]" : "md:w-[40%]"
    const rightProportion= leftBigger ? "md:w-[40%]" : "md:w-[60%]"
    const rightEmpty = rightContent == <></>
    // const rightBackground = rightEmpty ? "" : " bg-[url('/card.png')] bg-cover"
    // const leftBackground = rightEmpty ? " bg-[url('/card.png')] bg-cover" : ""
    return (
       <div id={id} className={`${className} my-10 flex flex-col md:flex-row w-full`} >
           <div className={"relative w-full m-auto " +leftProportion }>
        
            {leftContent}</div> 
           <div className={"w-full m-auto  " +rightProportion  }>
          
            {rightContent}</div>
       </div>
       
    )
}

// #697F87
// #BC9346 
// #747256
// #BCB196