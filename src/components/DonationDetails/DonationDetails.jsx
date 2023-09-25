
import { useLoaderData, useParams } from "react-router-dom";
const DonationDetails = () => {
    const all_donations = useLoaderData();
    const {donationid} = useParams();
    console.log("id from params",donationid)
    const idInt = parseInt(donationid);
    console.log("all don",all_donations )
    const specific_donation = all_donations.find(don => don.id === idInt);
    console.log("spec don",specific_donation )
    const {Picture,Price,Description,Color_for_category_bg,Title}= specific_donation;
    return (
        <div className="mx-20 relative mt-10  ">
          
            <div >
                 <img className="w-full h-[500px] object-fill" src={Picture}  />

            </div>

            <div className="h-28 absolute top-[390px] w-full bg-[black] opacity-50  ">

               
            </div>
            <button style={{background: `${Color_for_category_bg}`}} className=" ms-10 mt-5 border-0 absolute text-white btn btn-primary font-bold top-[390px]  text-red-white">Donate { Price} </button>

            <div>

                <h1 className="text-4xl font-bold mt-5"> {Title}</h1>
                <p className="text-gray my-5 ">
{Description}
                </p>
            </div>
              
        </div>
    );
};

export default DonationDetails;