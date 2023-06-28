import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Test from './components/Test';


function App(props) {
  // const {title, price, test, hello} = props


  let text = "Hello"

  const [state, setState] = useState(false) 
  const [state2, setState2] = useState(false) 
  const [sun, setSun] = useState(1)
  console.log("APP");
  console.log(state);
  function changeText(){
    setState((prev)=>!prev)
  }
  function changeText2(){
    setState2(true)
  }

  useEffect(()=>{
    console.log("Hello");
    setSun((prev)=> {
      console.log(prev);
      return prev + 1
    })
  },[state2])
  
  return (
    <div className="App">
       <h1>{text}</h1>
       <button onClick={changeText}>CHANGE</button>
       <button onClick={changeText2}>COUNT</button>
       <h1>{sun}</h1>
       {!state && <Test/>}
    </div>
  );

}
export default App;



function fun(){
  return 

}
fun()