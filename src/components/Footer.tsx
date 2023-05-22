import cn from "classnames";


import React from 'react'

const Footer = ({ children }: any) => {
  return (

    <div className={cn("flex w-full justify-center animate-fadeIn")}>
      <div className="flex w-full max-w-screen-lg flex-row items-center p-6">
        <span className="ml-auto whitespace-nowrap text-2xs dark:text-neutral-400">
          © {new Date().getFullYear()} Ahmed Kallel.
        </span>
        
        {children}
      </div>
    </div>
  )
}

export default Footer