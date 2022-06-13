import React from "react"
import { useState } from "react";
 
const InputForm = ({setData}:any) => {

 


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    
  });
  setData(user)

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { firstName, lastName, email, } = user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
     
        <div style={{ marginTop: "40px" }}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              name="firstName"
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>
          <br />
          <label>
            last Name:
            <input
              type="text"
              value={lastName}
              name="lastName"
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <br />
          <label>
            email:
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => onInputChange(e)}
              required
            />
          </label>
          <br />
         
          <br />
          <br />
          <button>Submit </button>
        </div>
     
    </form>
  );

  }

export default InputForm
