import React, { useState } from 'react'
import styles from "./auth.module.scss"
import {TiUserAddOutline} from "react-icons/ti"
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { registerUser, validateEmail } from '../../services/authService'
import { useDispatch } from 'react-redux'
import {SET_LOGIN,SET_NAME,SET_USER} from "../../redux/features/auth/authSlice";
import Loader from '../../components/loader/Loader'

const initialState = {
 name : "",
 email: "",
 password:"",
 password2:"",
};
const Register = () => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isloading, setIsLoading] = useState(false)
  const [formData, setformData] = useState(initialState)
  const {name ,email,password,password2} = formData

  const handleInputChange =(e)=>{
    const {name,value} = e.target;
    setformData({...formData,[name]:value});
  }

  const register= async(e)=>{
e.preventDefault()

if(!name || !email || !password){
  return toast.error("All fields are required")
}
if( password !== password2){
  return toast.error("Password not match")
}
if(password.length < 6 )
{
  return toast.error("Password must be greater than 6 characters")
}
if(!validateEmail(email))
{
  return toast.error("Please enter valid email")
}

const userData  = {
  name,email,password
}
setIsLoading(true)
try {
  const data  = await registerUser(userData)
  // console.log(data)
  await dispatch(SET_LOGIN(true))
  await dispatch(SET_NAME(data.name))
  navigate("/dashboard");
  setIsLoading(false)
} catch (error) {
  setIsLoading(false)
}


// console.log(formData)


  }
  return (
    <div className={`container ${styles.auth}`}>
      {isloading && <Loader/> }
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={register}>
            <input type="text" placeholder='Name' required name='name' value={name} onChange={handleInputChange}/> 
            <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange}/> 
            <input type="password" placeholder='Password' required name='password' value={password} onChange={handleInputChange}/>
            <input type="password" placeholder='Confirm Password' required name='password2' value={password2} onChange={handleInputChange}/>
            <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
          </form>


<span className={styles.register}>
  <Link to ="/">Home</Link>
  <p>&nbsp; Already have an account &nbsp;</p>
  <Link to ="/login">Login</Link>
</span>

        </div>
      </Card>
    </div>
  )
}

export default Register