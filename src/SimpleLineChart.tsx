import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "day1", portfolio: 5 },
  { name: "day2", portfolio: 7 },
  { name: "day3", portfolio: 6 },
  { name: "day4", portfolio: 5 },
  { name: "day5", portfolio: 2 },
  { name: "day6", portfolio: 8 },
];

export default function SimpleLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" className="hidden" />
        <YAxis className="hidden" />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="portfolio" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
