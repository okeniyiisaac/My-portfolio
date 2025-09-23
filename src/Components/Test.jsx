import { Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-scroll'

const Test = () => {
  return (
    <div>
  
                         <Link to="about" smooth={true}>
                         <span className=" hover:text-red-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block">
                           about
                          
                        </span></Link>
                        
                        
      
    </div>
  )
}

export default Test
