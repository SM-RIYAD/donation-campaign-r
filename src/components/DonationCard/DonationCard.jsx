
import PropTypes from "prop-types";
const DonationCard = ({donation}) => {
            const{Picture,Title,Category,Color_for_category_bg,Color_for_textandbuttonbackground,Color_for_card_bg,Description,Price}= donation;
          const x="#ffff";
            const color_code= `text-red-500`
            console.log(color_code)
    return (
        <div  className="flex flex-col w-72 rounded-lg gap-3">

            <div className='h-44 w-72 '>
                <img src={Picture} alt=""  />


            </div>
            <div style={{background:`${Color_for_card_bg}`}} className="donation-elements h-30 ">
                <button className="m-2 p-2" style={{background:`${Color_for_textandbuttonbackground}`, color:`${Color_for_category_bg}`}}> {Category} </button>
            <h1 className="p-2" style={{color:`${Color_for_category_bg}`}} >{Title}</h1>



            </div>
             
        </div>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object,
   
  };
export default DonationCard;