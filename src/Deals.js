import { RiDiscountPercentFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import './Deals.css'
const Deals = () => {
  return (
    <div>
        <div className="electronics-start">
            <div><RiDiscountPercentFill className="discount-logo" /> Steal Deals to buy </div>
            <div>View All <FaArrowRight /> </div>
        </div>



    </div>
  )
}

export default Deals;
