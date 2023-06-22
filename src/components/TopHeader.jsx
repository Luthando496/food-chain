import React from 'react'

const TopHeader = ({header,title,color}) => {
  return (
    <div className="text my-10">
          <h3 className="text-sm md:text-[15px] tracking-[4px] font-thin text-black text-center">{header}</h3>
          <h1 className="text-center tracking-[5px] text-xl md:text-2xl lg:text-6xl my-4 font-semibold text-black/70 font-roboto">{title}</h1>
          <p className="text-center leading-[1.9] text-base font-medium text-black/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto<br /> doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo<br/> condorico consectetur adipiscing elitut aliquip.</p>
        </div>
  )
}

export default TopHeader