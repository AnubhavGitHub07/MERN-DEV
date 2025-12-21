import React, { useEffect } from "react";
import {useState, useRef} from "react"

const App = () =>{
  const [ count , setCount] = useState(0);
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

    ref.current = ref.current + 1 ;
    console.log(ref.current);
  };

  return (
    <div>
    <p>
    value of a is: {count}</p>
    <button  onClick = {handleClick}>Increment</button>
    </div>
  );
};

export default App;

