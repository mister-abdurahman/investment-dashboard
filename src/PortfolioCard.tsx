import React from "react";
import SimpleLineChart from "./SimpleLineChart";

interface cardType {
  date: string;
  total_dollar: string;
  rate: number;
  percent: number;
  graph: boolean;
}

export default function PortfolioCard({
  date,
  total_dollar,
  rate,
  percent,
  graph,
}: cardType) {
  return (
    <div className="flex flex-col justify-between border-[1px] border-gray-400 rounded-2xl w-fit p-6 min-h-[10rem]">
      <h4 className="">
        {date}
        <span className="block mt-2 w-7 h-1 bg-teal-700 rounded"></span>
      </h4>
      <div className="relative">
        <p className="text-sm">Portfolio Value</p>
        <h1 className="text-3xl">${total_dollar}</h1>
        <p className={rate < 1 ? "text-red-600" : `text-green-500`}>
          {rate} ({percent}%)
        </p>
        {graph && (
          <div className="absolute inset-1/2 transform -top-5 left-[30%] -translate-x-1/2 -translate-y-1/2 w-60 h-24">
            <SimpleLineChart />
          </div>
        )}
      </div>
    </div>
  );
}
