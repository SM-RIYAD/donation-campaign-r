import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonation } from "../../Utilities/Utilities";

// getStoredDonation

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieChartStat = () => {
  const [stored_ids, setStoredIds] = useState([]);
  let stored_dons = getStoredDonation();
  console.log("stored_dons", stored_dons.length);
  let value_for_A = stored_dons.length;
  let value_for_B = 12 - stored_dons.length;

  const data = [
    { name: "Group A", value: value_for_A },
    { name: "Group B", value: value_for_B },
  ];

  return (
    <div className=" h-[450px] lg:w-full md:w-full w-[300px] flex flex-col    items-center ">
   
      <PieChart width={500} height={800}>
        <Pie
          data={data}
          cx={250}
          cy={250}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
     
      </PieChart>
    
    </div>
  );
};

export default PieChartStat;
