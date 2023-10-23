import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dummyData = [
  { name: "Jan", portfolio: 60, dollar: 24, etfs: 20 },
  { name: "Feb", portfolio: 80, dollar: 40, etfs: 20 },
  { name: "Mar", portfolio: 30, dollar: 24, etfs: 90 },
  { name: "Apr", portfolio: 54, dollar: 24, etfs: 20 },
  { name: "May", portfolio: 80, dollar: 24, etfs: 20 },
  { name: "Jun", portfolio: 30, dollar: 74, etfs: 20 },
  { name: "Jul", portfolio: 20, dollar: 34, etfs: 90 },
  { name: "Aug", portfolio: 30, dollar: 84, etfs: 20 },
  { name: "Sep", portfolio: 80, dollar: 62, etfs: 30 },
  { name: "Oct", portfolio: 30, dollar: 74, etfs: 20 },
  { name: "Nov", portfolio: 10, dollar: 84, etfs: 30 },
  { name: "Dec", portfolio: 38, dollar: 54, etfs: 80 },
];

function StackedBarChart() {
  return (
    <ResponsiveContainer width="100%" height="75%">
      <BarChart
        width={500}
        height={300}
        data={dummyData}
        margin={{
          top: 0,
          right: 10,
          left: 2,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" className="text-sm" />
        <YAxis className="hidden" />
        <Tooltip />
        {/* <Legend  /> */}
        <Bar dataKey="portfolio" stackId="a" fill="blue" barSize={5} />
        <Bar dataKey="dollar" stackId="a" fill="lightblue" />
        <Bar dataKey="etfs" stackId="a" fill="red" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StackedBarChart;
