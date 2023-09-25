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

  const color_code = `text-red-500`;

  return (
    <Link to={`/donationdetails/${id}`}>
      {" "}
      <div className="flex flex-col w-72 rounded-lg gap-3">
        <div className="h-44 w-72 ">
          <img src={Picture} alt="" />
        </div>
        <div
          style={{ background: `${Color_for_card_bg}` }}
          className="donation-elements h-30 "
        >
          <button
            className="m-2 p-2"
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
