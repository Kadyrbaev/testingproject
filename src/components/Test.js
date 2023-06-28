import { Button, Switch } from '@mui/material';
import React, { useEffect, useRef } from 'react'

const Test = ({title,price, ...props }) => {
    console.log("TEST");
    useEffect(()=>{
        // console.log("USE");

        return ()=>{
            console.log("MUSOR CLEAN");
        }
    },[])

    const textRef = useRef()
    console.log(textRef);
    function test(){
        console.log(textRef);
    }
  return (
    <div>
      <h1 ref={textRef}>TEST</h1>
      <input  type="text" />
      <button onClick={test}>TEST</button>
      <Button variant="outlined" color="success">TEXT</Button>
      <Switch defaultChecked color="secondary" />
      "BRANCH"
    </div>
  )
}

export default Test
