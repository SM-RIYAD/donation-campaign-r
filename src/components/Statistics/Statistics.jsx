import PieChartStat from "../PieChartStat/PieChartStat";


const Statistics = () => {
    return (
        <div className="mx-20  ">
        
            <PieChartStat></PieChartStat>
            <div  className="flex md:flex-row ms-8  lg:ms-2  lg:flex-row flex-col gap-10 items-center justify-center">

               
                 <div className="flex ">
                 <p className="w-[150px]">Your donation</p>
                <div className="flex bg-blue-400 h-5 w-40">
                </div>

                 </div>
                
               <div className="flex ">
               <p className="w-[150px]">Total donation</p>
                <div className="flex bg-emerald-400 h-5 w-40">
                </div>
               </div>
                

            </div>
        </div>
    );
};

export default Statistics;