import './App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      pass +=str[Math.floor(Math.random() * str.length + 1)];
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
  <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-16 bg-gray-700'>
    <h1 className='text-4xl text-center text-white my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-4'>
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)}/>
          <label htmlFor='numberInput' className='text-white'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor='charInput' className='text-white'>Characters</label>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
