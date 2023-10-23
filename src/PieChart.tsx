import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Industry 1", value: 350 },
  { name: "Industry 2", value: 250 },
  { name: "Industry 3", value: 200 },
  { name: "Industry 4", value: 100 },
  { name: "Industry 5", value: 100 },
  { name: "Industry 6", value: 80 },
  { name: "Industry 7", value: 50 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF1042",
  "#EF4092",
  "#008042",
];

export default function SimplePieChart() {
  return (
    <PieChart width={250} height={286} className="absolute -top-[4rem]">
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={70}
        outerRadius={77}
        // fill="#8884d8"
        // paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
