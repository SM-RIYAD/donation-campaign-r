import PropTypes from "prop-types";

const AddedDonationCard = ({ marked_donation }) => {
  const {
    Picture,
    Title,
    Category,
    Color_for_category_bg,
    Color_for_textandbuttonbackground,
    Color_for_card_bg,
Price,
    id,
  } = marked_donation;
  console.log("hi ", marked_donation);
  return (
    <div className=" border shadow-lg rounded-lg flex lg:flex-row md:flex-row flex-col  md:w-[600px] w-full lg:w-[600px] lg:h-56  md:h-56 h-full ">
      <img className=" lg:w-1/3 md:w-1/3 lg:h-full md:h-full  object-fill" src={Picture} alt="" />

      <div className="rounded-lg  lg:w-2/3 md:w-2/3  w-full p-10 lg:h-full md:h-full   " style={{ background: `${Color_for_card_bg}` }}>
        <button
          className="p-2 font-bold"
          style={{
            background: `${Color_for_textandbuttonbackground}`,
            color: `${Color_for_category_bg}`,
          }}
        >
          {" "}
          {Category}{" "}
        </button>
        <p className="text-xl font-bold"> {Title} </p>
        <p  style={{

            color: `${Color_for_category_bg}`,
          }}>{Price}</p>
           <button  style={{background: `${Color_for_category_bg}`}} className="  border-0  text-white btn btn-primary font-bold   "> View Details </button>
      </div>
    </div>
  );
};
AddedDonationCard.propTypes = {
  marked_donation: PropTypes.object,
};
export default AddedDonationCard;
