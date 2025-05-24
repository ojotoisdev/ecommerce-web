import ExploreMenu from "./commponet/navbar/ExploreMenu"
import Cart from "./features/Add-to-cart/Cart"
import Footer from "./features/footer/Footer"
import About from "./features/information/About"
import Posts from "./features/posts/Posts"
import Product from "./features/products/Products"
import Services from "./features/service/Services"
import './index.css'
const App = () => {
  return (
    <div>
      <ExploreMenu/>
      <Product/>
      <Services/>
      <Posts/>
      <About/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default App
