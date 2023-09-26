import { getStoredDonation } from "../../Utilities/Utilities";
import { useLoaderData, useParams } from "react-router-dom";
import AddedDonationCard from "../AddedDonationCard/AddedDonationCard";
import { useEffect, useState } from "react";
const Donation = () => {
  const [all_donations, set_ALl_Donations] = useState([]);
  const [show_see_all, set_show_see_all] = useState(false);
  const [selected_donations_state, set_selected_Donations] = useState([]);
  const [statesToSHow, set_statesToSHow] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => set_ALl_Donations(data));
  }, []);

  console.log("from use eff", all_donations);

  useEffect(() => {
    if (all_donations.length) {
      const ids_from_Cart = getStoredDonation();
      let selected_donations = [];

      ///
      for (const id of ids_from_Cart) {
        console.log(id);
        const selected_dons = all_donations.find((don) => don.id === id);
        if (selected_dons) {
          selected_donations.push(selected_dons);
        }
      }
      set_selected_Donations(selected_donations);
     if( selected_donations.length>4)
     { set_statesToSHow(selected_donations.slice(0,4))
        set_show_see_all(true);
    
    }
      else set_statesToSHow(selected_donations);
    }
  }, [all_donations]);
const handleSeeAll= ()=>{
    set_statesToSHow(selected_donations_state);
    set_show_see_all(false);
    
}
  console.log("state: ", selected_donations_state);


  return (
    <div>
    
      <div className="grid lg:mx-20  md:mx-20  mx-10 my-10 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 ">
   
        
{
        
        statesToSHow.map((marked_donation, idx) => {
          return (
            <AddedDonationCard
              key={idx}
              marked_donation={marked_donation}
            ></AddedDonationCard>
          );
        })
        
        
        
        }
      </div>{" "}
      {show_see_all&&<div className="mx-20   flex justify-center">
      <button onClick={handleSeeAll} className="btn text-white btn-accent" >See all</button>
      </div>}
      
    </div>
  );
};

export default Donation;
