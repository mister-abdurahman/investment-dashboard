import React from "react";
import { AiFillApple } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex relative mt-9 justify-around flex-wrap">
      <span className="block absolute left-0 w-1 h-14 bg-teal-500"></span>
      <div className="flex">
        <div>
          <p className="text-gray-400 uppercase mb-2 text-xs">Symbol</p>
          <div className="flex gap-5 items-center">
            <span className="w-10 h-10 bg-gray-200 rounded-full p-2">
              <AiFillApple className="w-full h-full fill-black" />
            </span>
            <h1 className="font-bold">AAPL</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Price
          </p>{" "}
          <h4 className="text-lg">= $ 234.00</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            % Return
          </p>{" "}
          <h4 className="text-lg text-teal-600">$ 45.43</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Total Net cost
          </p>{" "}
          <h4 className="text-lg">$ 1 234.00</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Market Value
          </p>{" "}
          <h4 className="text-lg">$ 1 345.87</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Total gain
          </p>{" "}
          <h4 className="text-lg text-teal-600">$ 456.34</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Daily gain
          </p>{" "}
          <h4 className="text-lg text-red-600">-$ 3.45</h4>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs text-right mb-3">
            Portfolio
          </p>{" "}
          <h4 className="text-lg">$ 13.45</h4>
        </div>
      </div>
    </div>
  );
}
