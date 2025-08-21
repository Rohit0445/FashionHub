import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let [loginfrm,setLogin] = useState({})
  let [userinfo,setUserinfo] = useState({})
  let navigator = useNavigate();

  function handleinput(e){
    const {name,value} = e.target
    setLogin({...loginfrm,[name]:value})
    

  }


  function handleloginsubmit(e){
    e.preventDefault()
    let sett = JSON.parse(localStorage.getItem('signfrm'))
    setUserinfo(sett)


    
    if(loginfrm.email == userinfo.email){
      if(loginfrm.password == userinfo.password){
        navigator('/')
      }
      else{
        alert("Incorect Password")
      }
    }
    else{
      alert("user NOt Found")
    }
      
  }

  return (
    <>
    <div className="h-100   w-300  px-100 py-40">
        <form  onSubmit={handleloginsubmit} className="space-y-6">
            <label htmlFor="" className="block text-lg text-gray-700 mb-1">Email</label><br />
            <input type="email" name='email' onChange={handleinput} className="w-150 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="you@example.com" required/><br /><br />

            <label htmlFor="" className="block text-lg text-gray-700 mb-1">Password</label><br />
            <input type="password" name='password' onChange={handleinput} className="w-150 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="••••••••" required/><br /><br />

            <input type="submit" value="LOGIN" className="w-150 bg-pink-500 text-white py-2 rounded text-md hover:bg-pink-600 transition-colors"/>
 

        </form>

        <div className="mt-4 flex justify-between  text-sm text-gray-600">
        <a href="#" className="hover:text-pink-500">Forgot Password?</a>
        <a href="#" className="hover:text-pink-500">Create Account</a>
      </div>
    </div>
    
      
    </>
  )
}

export default Login
