import PieChartStat from "../PieChartStat/PieChartStat";


const Statistics = () => {
    return (
        <div className="mx-20">
        
            <PieChartStat></PieChartStat>
            <div  className="flex gap-5 justify-center">

                <p>Your donation</p>
                <div className="flex bg-blue-400 h-5 w-40">

                </div>
                <p>Total donation</p>
                <div className="flex bg-green-500 h-5 w-40">

                </div>

            </div>
        </div>
    );
};

export default Statistics;