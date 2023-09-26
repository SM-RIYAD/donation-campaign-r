import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ donation }) => {
  const {
    Picture,
    Title,
    Category,
    Color_for_category_bg,
    Color_for_textandbuttonbackground,
    Color_for_card_bg,
 
    id,
  } = donation;



  return (
    <Link className="" to={`/donationdetails/${id}`}>
      {" "}
      <div className="flex  flex-col items-center    ">
        <div className="h-72 w-72 border ">
          <img className="h-72 object-fill" src={Picture} alt="" />
        </div>
        <div
          style={{ background: `${Color_for_card_bg}` }}
          className="donation-elements border h-36 w-72 "
        >
          <button
            className="m-2 mt-4 p-2"
            style={{
              background: `${Color_for_textandbuttonbackground}`,
              color: `${Color_for_category_bg}`,
            }}
          >
            {" "}
            {Category}{" "}
          </button>
          <h1 className="p-2" style={{ color: `${Color_for_category_bg}` }}>
            {Title}
          </h1>
        </div>
      </div>{" "}
    </Link>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
