"use client"
import Image from "next/image"
import { useState } from "react";
export default function RegisterPage(){
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  function handleFormSubmit(){
    ev.preventDefault();
      fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json'}
    })
  }
  return(
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
        </h1>
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Enter your email" value={email}
          onChange={ev => setEmail(ev.target.value)}
          />
          <input type="password" placeholder="Enter Password" value={password}
          onChange={ev => setPassword(ev.target.value)}/>
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500 ">
            Login with facebook
          </div>
        <button className="flex gap-4 justify-center">
        <Image src={'/google.png'} alt={"google icon"} width={24} height={24}/>
          Login with Goggle
          </button>
        </form>
        <div>
         
        </div>
        </section>
  )
}