import React, { useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  

  // Heavy operation 

  const prime = () => {
    console.log("calculate prime nmber of",text);
    return findPrime(text);
  }

  return (
     <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>

          <input className='border border-black w-72 px-2'
          type='number'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        <div>
          <h1 className='mt-4 font-bold'>nth Prime: {prime()}</h1>
        </div>
    </div>
  )
}

export default Demo