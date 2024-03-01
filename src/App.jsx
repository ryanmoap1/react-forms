import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate";
import SignupForm from './components/SignupForm';



 export default function App() {


  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");
  }



  return (
    <>
      <Authenticate/>
      <SignupForm/>
    </>


  )
}


