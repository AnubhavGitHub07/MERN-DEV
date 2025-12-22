import React, { useEffect } from "react";
import {useState, useRef} from "react"
import { useMemo } from "react";

const App = () =>{
  const [ count , setCount] = useState(0);
  function sum(){
    let sum = 0;
    for(let i = 0 ; i<10000 ; i++){
      sum+=i;
    }

    return sum;

  }

  let res = useMemo(() => sum() , []);
  const ref = useRef(1);
  useEffect(() => {
    const response = fetch("https://dummyjson.com/products");
    response.then((res) => 
      res.json().then((data) => console.log(data))
    );

    return() => {
      console.log("memory cleaned");
    };
  } , []);

  const handleClick =() =>{
    setCount(count + 1 );

    ref.current+=1;
    console.log(ref.current);
  };

  return (
    <div>
      <h1>Value is : {res}</h1>
    <p>
    value of a is: {count}</p>
    <button  onClick = {handleClick}>Increment</button>
    </div>
  );
};

export default App;

