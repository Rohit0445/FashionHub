import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Signup = () => {
  let [signupfrm, setSignupfrm] = useState({});
  let navigator = useNavigate();

  function handleinpt(e) {
    const { name, value } = e.target;
    setSignupfrm({ ...signupfrm, [name]: value });
  }


 

  function handlesubmit(e) {
    e.preventDefault();
    let pass = signupfrm.password;
    if (pass.length>=8 && pass.length<=15) {
      if (pass.match(/[1234567890]/)&& pass.match(/[!@#$%^&*()]/)&& pass.match(/[a-z]/)&& pass.match(/[A-Z]/) ) {
        localStorage.setItem("signfrm", JSON.stringify(signupfrm));
        alert("signUP successfull Please login");
        navigator("/login");
      } else {
        alert("Please Create strong Password  Atleast one special character , atleast one number , atleast one capital letter");
      }
    } else {
      alert("Password must be 8-15 characters");
    }
  }

  return (
    <>
      <div className="pt-40 px-100">
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="">Name</label><br />
          <input
            type="text"
            name="name"
            id=""
            onChange={handleinpt}
            className="w-150 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="Name" required
          />
          <br />
          <br />

          <label htmlFor="">Email</label><br />
          <input
            type="email"
            name="email"
            id=""
            onChange={handleinpt}
            className="w-150 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="email" required
          />
          <br />
          <br />

          <label htmlFor="">Password</label><br />
          <input
            type="text"
            name="password"
            id=""
            onChange={handleinpt}
            className="w-150 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="*******" required
          />
          <br />
          <br />

          <input type="submit" className="w-150 bg-pink-500 text-white py-2 rounded text-md hover:bg-pink-600 transition-colors" value={"SIGNUP"}/>
        </form>

        <div className="mt-4 flex justify-between  text-sm text-gray-600">
          <Link className="hover:text-pink-500" to={'/login'}>Already have an account Please Login</Link>
        
        
      </div>
      </div>
    </>
  );
};

export default Signup;
