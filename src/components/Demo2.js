import React, { useState } from 'react'

const Demo2 = () => {

    const [y,setY] = useState(0);

    let x = 10;


  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <div>
            <button className='bg-green-100 p-2 m-2' onClick={()=>{
                x=x+1;
    console.log("x",x);

            }}>Increase</button>
            <span className='font-bold text-xl'>let - {x}</span>
        </div>
        <div>
            <button className='bg-green-100 p-2 m-2' onClick={()=>{
                setY(y+1);

            }}>Increase</button>
            <span className='font-bold text-xl'>state - {y}</span>
        </div>
    </div>
  )
}

export default Demo2