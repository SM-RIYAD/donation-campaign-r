import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = () => {
    console.log("search word after", searchWord);

    fetch("data.json")
      .then((data) => data.json())
      .then((data) => {
        if (searchWord.length === 0) {
          setDonations(data);
        } else {
          let new_data = data.filter(
            (specific_Data) =>
              specific_Data.Category.toLowerCase() === searchWord.toLowerCase()
          );

          setDonations(new_data);
        }
      });
  };
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setDonations(data));
  }, []);
  console.log("this is dona data", donations);
  return (
    <div className=" md:mt-10 mt-10 ">
      <section className="banner flex flex-col justify-center items-center   ">
        <div className=" lg:w-auto lg:h-[400px] w-full  md:w-[768px]  absolute ">
          <img
            className=" w-full object-cover  opacity-10 -z-10 relative lg:-top-[50px]  "
            src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0XeArxKoFBDxfrZMHd16WyOFf0lAWz0Qy2socnhcNWNqp_7Hz2mVdXqhY"
            alt=""
          />
        </div>

        <div className="relative  ">
          <h1 className="lg:text-4xl lg:px-0 md:px-0 px-3    text-xl lg:pt-20  font-bold md:text-4xl text-center ">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center lg:mt-10 md:mt-10 mt-3">
            <input
              type="text"
              placeholder="Search Category"
              className="input input-bordered"
              onChange={(e) => {
                setSearchWord(e.target.value);
                console.log("search word", searchWord);
              }}
            />
            <button
              onClick={handleSearch}
              className="btn btn-primary bg-red-500 border-0 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="card-showing grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mb-20 gap-5 lg:mx-20 md:mx-20 mx-5  mt-20 md:mt-44 lg:mt-72">
        {donations.map((donation, idx) => (
          <DonationCard key={idx} donation={donation}></DonationCard>
        ))}
      </section>
    </div>
  );
};

export default Home;
