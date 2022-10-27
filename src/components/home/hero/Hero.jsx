import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Signup from "./signup"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO FEDHA' title='' />
            <p>The leading mobile banking service that allows users to store and transfer money through their mobile phones</p>
            <div className='button'>
              <button className='primary-btn'   type="submit" onClick={Signup}>
                LOGIN 
                {/* <i className=' */}
                {/* <input  */}
                type="submit" 
                {/* class="search-btn" value="seacrh" /> */}
{/* '></i> */}
              </button>
              <button>
                SIGN UP<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
