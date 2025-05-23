import './Service.css'
import book from "../../assets/bx_bxs-book-reader.png"
import icon from "../../assets/icon.png"
import arrow from "../../assets/arrow.png"
const Services = () => {
  return (
    <div className="best-services">
        <div className='heading'>
            <h4>Featured Products</h4>
            <h3>THE BEST SERVICES</h3>
            <h5>Problems trying to resolve the conflict between </h5>
        </div>  
        <div className='service-categories'>
            <div className='categories-items'>
               <img src={book} alt="" /> 
               <h3>Easy Wins</h3>
               <h6>Get your best looking smile <br /> now!</h6>
            </div>
            <div className='categories-items'>
                <img src={icon} alt="" />
                <h3>Concrete</h3>
                <h6>Defalcate is most focused <br /> in helping you discover your most <br /> beautiful smile</h6>

            </div>
            <div className='categories-items'>
                <img src={arrow} alt="" />
                <h3>Hack Growth</h3>
                <h6>Overcame any hurdle or any <br /> other problem.</h6>
            </div>
        </div>
      
    </div>
  )
}

export default Services
