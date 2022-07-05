import {useState} from "react";

let arr= [];
export default function Calculator(){
  const [value, setValue]= useState(()=>{return 0});

  const handleChange= (e)=>{
    if(e.target.innerHTML==='-100'){
    setValue(value-100);
    arr.push(value+e.target.innerHTML);
  }
  else if(e.target.innerHTML==='-10'){
    setValue(value-10)
    arr.push(value+e.target.innerHTML);
  }
  else if(e.target.innerHTML==='-1'){
    setValue(value-1)
    arr.push(value+e.target.innerHTML);
  }
  else if(e.target.innerHTML==='+1'){
    setValue(value+1)
    arr.push(value+e.target.innerHTML);
  }
  else if(e.target.innerHTML==='+10'){
    setValue(value+10)
    arr.push(value+e.target.innerHTML);
  }
  else if(e.target.innerHTML==='+100'){
    setValue(value+100)
    arr.push(value+e.target.innerHTML);
  }
}

  return(
    <>
    <center>
        <button type="button" onClick={handleChange}>-100</button>
        <button type="button" onClick={handleChange}>-10</button>
        <button type="button" onClick={handleChange}>-1</button>
        <div>
        <br></br>
        <button type='button' >Undo</button>
        <span><h4>{value}</h4></span>
        <button type='button' >Redo</button>
        </div>
        <br></br>
        <button type="button" onClick={handleChange}>+1</button>
        <button type="button" onClick={handleChange}>+10</button>
        <button type="button" onClick={handleChange}>+100</button>
        <br></br>
        <br></br>
        <div>History</div>
        {arr.map((item, key)=>{
          return(
            <h6 key={key}>{item}</h6>
          )
        })}
        </center>
    </>
  )
}