import { getStoredDonation } from "../../Utilities/Utilities";
import { useLoaderData, useParams } from "react-router-dom";
import AddedDonationCard from "../AddedDonationCard/AddedDonationCard";
import { useEffect, useState } from "react";
const Donation = () => {
  const [all_donations, set_ALl_Donations] = useState([]);
  const [selected_donations_state, set_selected_Donations] = useState([]);


  useEffect(() => {
    fetch("../../../public/data.json")
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

      ///
    }
  }, [all_donations]);

  console.log("state: ", selected_donations_state);



  return (
    <div className="grid mx-20 my-10 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 ">
    
      {selected_donations_state.map((marked_donation,idx) => {
        return <AddedDonationCard key={idx}
          marked_donation={marked_donation}
        ></AddedDonationCard>;
      })}
    </div>
  );
};

export default Donation;
