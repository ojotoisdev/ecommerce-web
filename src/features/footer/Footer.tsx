
import './Footer.css'
import facebook from '../../assets/facebook.png'
import twitter from "../../assets/Twitter.png"
import a from "../../assets/a.png"
const Footer = () => {
  return (
    <div className="Footer">
      <nav className='Navbar-footer'>
        <div className="footer-head">
            <h3>Bandage</h3>
        </div>
        <div className="social">
            <a href="" ><img src={facebook} alt="Description" /></a>
            <a href="" ><img src={a} alt="Description" /></a>
            <a href="" ><img src={twitter} alt="Description" /></a>

        </div>
      </nav>
      <div className='footer-menu'>
        <div className='headings'>
          <h5>Company Info</h5>
          <div className='link'>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className='headings'>
          <h5>Legal</h5>
          <div className='link'>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="">We are hiring</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className='headings'>
          <h5>Features</h5>
          <div className='link'>
            <a href="">Business Marketing</a>
            <a href="">Business Marketing</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </div>
        </div>
        <div className='headings'>
          <h5>Resources</h5>
          <div className='link'>
            <a href="">IOS & Android</a>
            <a href="">Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </div>
        </div>
        <div id='headings' className='headings'>
          <h5>Get In Touch</h5>
          <div className='text'>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
          </div>
          <h6>Lore imp sum dolor Amit</h6>
        </div>
      </div>
      <footer className='footer-bottom'>
        <h6>Made With Love By Finland All Right Reserved </h6>
      </footer>
    </div>
  )
}

export default Footer
