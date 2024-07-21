import { RiDiscountPercentFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import './Electronics.css'
const Electronics = () => {
  return (
    <div>
        <div className="electronics-start">
            <div><RiDiscountPercentFill className="discount-logo" />Electronics to Rent</div>
            <div>View All <FaArrowRight /> </div>
        </div>



    </div>
  )
}

export default Electronics
