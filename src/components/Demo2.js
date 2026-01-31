import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  let x = 10;

  const ref = useRef(0);

  // not like => ref = 0
  // ref= { current: 0}

  console.log("Rendering......");

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("set Interval is calling");
    }, 2000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log("x", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">let - {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase State
        </button>
        <span className="font-bold text-xl">state - {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref.current" + ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="font-bold text-xl">ref - {ref.current}</span>
      </div>
      <button className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg" onClick={() => clearInterval(i.current) }>Stop Printing</button>
    </div>
  );
};

export default Demo2;
