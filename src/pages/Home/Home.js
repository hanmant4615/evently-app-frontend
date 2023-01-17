import React from 'react'
import {CgEventbrite} from "react-icons/cg"
import {Link} from "react-router-dom"
import "./Home.scss"
import heroImg from "../../assets/inv-img.png"
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLink'
const Home = () => {
  return (
    <div className='home' style={{}}> 
       <nav className='container --flex-between'>
      
        <div className="logo">
            <CgEventbrite to="/" size={35}/>
        </div>
        <ul className='home-links'>
            <ShowOnLogout>
            <li>
                <Link  to="/register"> Register</Link>
            </li>
            <li>
                <button className="--btn --btn-primary">
                <Link  to="/login"> Log in </Link>
                    </button> 
            </li>
           
            </ShowOnLogout>
            <ShowOnLogin>
                
            <li>
                <button className="--btn --btn-primary">
                <Link  to="/dashboard"> DashBoard </Link>
                    </button> 
            </li>
            <li>
            <button className="--btn --btn-danger">
                <Link  to="/logout"> logout </Link>
                    </button> 
            </li>
            </ShowOnLogin>
        </ul>

       </nav>

        {/* HERO Section  */}
        <section className="container hero">
           <div className="hero-text">
            <h2>  Evently  </h2>
            <h3>
                Manage your event with Evently
            </h3>

            <div className="hero-buttons">
             
            </div>
            <div className="--flex-start">
                <NumberText num="1k" text="Event registered"/>
                <NumberText num="500" text="Active users"/>
            </div>
            </div> 

            <div className="hero-image">
                <img src={heroImg} alt="Inventory"  />
            </div>
        </section>

    </div>
  )
}

const NumberText = ({num,text}) =>{
return (
    <div className="--mr">
        <h3 className='--color-white'>{num}</h3>
        <p className='--color-white'>{text}</p>
    </div>
)
}

export default Home