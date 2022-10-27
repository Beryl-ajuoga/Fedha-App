import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Fedha</h1>
            <span>YOUR ONLINE PATNER IN TRANSACTION</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>

            </ul>
          </div>
          
          <div className='box'>
            <h3>Reviews</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Let's hear from you</h3>
            <ul>
            
              <li>
                <i className='fa fa-phone-alt'></i>
                +254 2000 2000
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@fedha.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
