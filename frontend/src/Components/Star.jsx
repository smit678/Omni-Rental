import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({stars}) => {
const ratingStar = Array.from({length:5},(ele, index)=>{

    let number = index + 0.5;
    
    return (
        <span key={index}>
      {
          stars >= index + 1 
          ? (<FaStar className="icons"/>) 
          : stars >= number 
          ? (<FaStarHalfAlt className="icons"/>) 
          : (<AiOutlineStar className="icons empty-icon"/>)
      }
    </span>
  );
});

return (
    <>
        <div className="icon-Star">
           {ratingStar} 
        </div>
    </>

)

}

export default Star
