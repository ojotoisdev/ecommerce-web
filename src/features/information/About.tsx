import unsplashone from '../../assets/unsplashone.png'
import unsplashtwo from "../../assets/unsplashtwo.png"
import unsplashthree from "../../assets/unsplashthree.png"
import unsplashfour from "../../assets/unsplashfour.png"
import unsplashfive from "../../assets/unsplashfive.png"
import unsplashsix from "../../assets/unsplashsix.png"
import unsplashseven from "../../assets/unsplashseven.png"
import unsplasheight from "../../assets/unsplasheight.png"
import unsplashnine from "../../assets/unsplashnine.png"
import user from "../../assets/user.png"

import './About.css'
const About = () => {
  return (
    <div className="About">
      <div className='information'>
        <h3>What they say about us</h3>
        <div className='user'>
            <div><img src={user} alt="" /></div>
            <div className="star-rating-container">
               <div className="stars">★★★★☆</div>
            </div>
            
        </div>
        <h6>Slate helps you see how many more days you need to work to <br /> reach your financial goal.</h6>
        <span className='span'>
            <a href="">Regina Miles</a>
            <h6>Designer</h6>
        </span>
      </div>
      <div className='images'>
        <img src={unsplashone} alt="" />
        <img src={unsplashtwo} alt="" />
        <img src={unsplashthree} alt="" />
        <img src={unsplashfour} alt="" />
        <img src={unsplashfive} alt="" />
        <img src={unsplashsix} alt="" />
        <img src={unsplashseven} alt="" />
        <img src={unsplasheight} alt="" />
        <img src={unsplashnine} alt="" />
      </div>
    </div>
  )
}

export default About
