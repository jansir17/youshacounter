import {useState} from "react";
export default function Calculator(){
  const [value, setValue]= useState(()=>{return 0});


  const handleChange= (e)=>{
    if(e.target.innerHTML==='-100'){
    setValue(value-100)
  }
  else if(e.target.innerHTML==='-10'){
    setValue(value-10)
  }
  else if(e.target.innerHTML==='-1'){
    setValue(value-1)
  }
  else if(e.target.innerHTML==='+1'){
    setValue(value+1)
  }
  else if(e.target.innerHTML==='+10'){
    setValue(value+10)
  }
  else if(e.target.innerHTML==='+100'){
    setValue(value+100)
  }
}

  return(
    <>
    <center>
        <button type="button" onClick={handleChange}>-100</button>
        <button type="button" onClick={handleChange}>-10</button>
        <button type="button" onClick={handleChange}>-1</button>
        <h4>Current Value:</h4><h1>{value}</h1>
        <button type="button" onClick={handleChange}>+1</button>
        <button type="button" onClick={handleChange}>+10</button>
        <button type="button" onClick={handleChange}>+100</button>
        </center>
    </>
  )
}