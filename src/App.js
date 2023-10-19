import './App.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  
  const[interest,setInterest]=useState(0)
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)


  const getValidate=(e)=>{
  const {name,value}=e.target
  console.log(name,value);
  
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){//!! -- to convert it to boolean
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
   if(name==='principle') {
    setPrinciple(value)
    setIsPrinciple(false)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else {
    setYear(value)
    setIsYear(false)
  }
  }
}
const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert('please fill the form')
  }
  else{
    setInterest(principle*rate*year/100)
  }
}

const handleReset=(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}



  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded text-center' style={{width:"500px"}}>
        <h1 className='text-secondary'>SIMPLE INTEREST APP</h1>
        <p >Calculate Simple Interest Easily</p>
        <div className='bg-warning d-flex justify-content-center align-items-center w-100 d-flex justify-content-center align-items-center w-100 p-4 rounded flex-column'>
          <h1>₹ { ' ' } {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
           <div className='mb-3'>
              <TextField name='principle' value={principle || ""} className='w-100' onChange={(e)=>getValidate(e)} id="standard-basic" label="₹ Principle Amount" variant="standard" />
           </div>
           {!isPrinciple &&<div>
            <p className='text-danger'>Invalid Input</p>
           </div>}
           <div className='mb-3'>
              <TextField name='rate'  value={rate || ""} className='w-100' id="standard-basic" onChange={(e)=>getValidate(e)} label="Rate Of Interest (p.a) %" variant="standard" />
           </div>
           {!isRate &&<div>
            <p className='text-danger'>Invalid Input</p>
           </div>}

           <div className='mb-3'>
              <TextField name='year' value={year || ""} className='w-100' id="standard-basic" onChange={(e)=>getValidate(e)} label="Year (yr)" variant="standard" />
           </div>
           {!isYear &&<div>
            <p className='text-danger'>Invalid Input</p>
           </div>}
           <Stack className='mt-5' direction="row" spacing={2}>
              <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:"200px",height:"50px"}} variant="contained">CALCULATE</Button>
              <Button onClick={handleReset} style={{width:"200px",height:"50px"}}  variant="outlined">RESET</Button>
            </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
