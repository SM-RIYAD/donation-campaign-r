

const Home = () => {
    return (
        <div className="lg:mx-20 md:mt-10 mt-10 ">
            {/* <img src="../../../images/Clothing.png" alt="" srcset="" /> */}
            <section style={{ backgroundImage: 'url("../../../images/Clothing.pngm")', backgroundSize: 'cover', backgroundPosition: 'center' }} className="banner  ">
              <div  className=" lg:w-[1303px]   md:w-[768px]  absolute border">
              <img className=" w-full object-cover  opacity-30  " src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0XeArxKoFBDxfrZMHd16WyOFf0lAWz0Qy2socnhcNWNqp_7Hz2mVdXqhY" alt="" />

              </div>
              

              
                <div className="relative border">
                <h1 className="lg:text-4xl text-xl md:text-4xl text-center ">I Grow By Helping People In Need</h1>
                <div className="flex justify-center mt-10">
                           
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-primary">Search</button>

                </div>
                </div>
        
              



            </section>

            <section className="card-showing"></section>
        </div>
    );
};

export default Home;