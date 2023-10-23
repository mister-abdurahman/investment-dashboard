import { BiSolidDoughnutChart } from "react-icons/bi";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { AiFillPlusCircle, AiOutlineDollar } from "react-icons/ai";
import sitting from "./assets/female-sitting-removebg-preview.png";
import StackedBarChart from "./StackedBarChart";
import PortfolioCard from "./PortfolioCard";
import SimplePieChart from "./PieChart";
import Footer from "./Footer";
import SideBar from "./SideBar";

const dummyCardData = [
  {
    date: "Nov 19",
    total_dollar: "9 864.34",
    rate: 234.23,
    percent: 30.34,
    graph: false,
  },
  {
    date: "Oct 19",
    total_dollar: "7 845.32",
    rate: 234.23,
    percent: 30.34,
    graph: true,
  },
  {
    date: "Sep 19",
    total_dollar: "9 864.34",
    rate: -134.23,
    percent: 30.34,
    graph: false,
  },
];

export default function Dashboard() {
  return (
    <div className="bg-gray-50 rounded-2xl border-8 border-white text-gray-700 max-w-[90%] mx-auto font-primary flex">
      <SideBar />

      <div className="flex-grow flex flex-col">
        <div className="bg-gray-200 rounded-tr-3xl rounded-bl-3xl flex gap-5 flex-col p-6">
          <div className="self-end flex gap-24 justify-between">
            <div className="flex gap-4 items-center">
              <span className="w-5">
                <MdOutlineLightMode className="w-full h-full" />
              </span>
              <p className="text-xs">US Stock market opens in 3 hours</p>
            </div>

            <div className="flex items-center gap-8">
              <p className="flex items-center gap-2 text-sm font-semibold">
                Main Wallet
                <span>
                  <IoIosArrowDown />
                </span>
              </p>
              <span className="w-7 relative">
                <span className="bg-red-600 w-[.3rem] aspect-square rounded-full absolute top-0 right-1"></span>
                <IoMdNotificationsOutline className="w-full h-full" />
              </span>
              <span className="w-10">
                <AiFillPlusCircle className="w-full h-full fill-black" />
              </span>
            </div>
          </div>

          <div className="-mb-32 flex gap-8 justify-center">
            <div className="bg-white rounded-xl relative py-5 px-8 basis-1/3">
              <h1 className="text-center">Upgrade your Account</h1>
              <figure className="w-48 -ml-20">
                <img
                  src={sitting}
                  alt="Sitting Female"
                  className="w-full h-full"
                />
              </figure>
              <p className="w-3/5 text-gray-500 absolute text-xs top-14 -right-5">
                Access many other features and helpful insights
              </p>
              <button className="absolute w-10 bottom-3 right-3">
                <BsArrowRightSquareFill className="w-full h-full fill-black" />
              </button>
            </div>
            <div className="w-full flex-grow bg-white rounded-xl">
              <div className="flex justify-between items-center px-7 py-5">
                <ul className="flex items-center gap-6 text-gray-400 text-sm">
                  <li className="text-black border-[1px] aspect-square border-black rounded px-1 leading-normal shadow">
                    1d
                  </li>
                  <li>1w</li>
                  <li>1m</li>
                  <li>1y</li>
                  <li>All</li>
                </ul>
                <div className="w-7 aspect-square">
                  <AiOutlineDollar className="w-full h-full" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-grow w-full min-h-full">
                  <StackedBarChart />
                </div>
                <div className="basis-2/5 flex flex-col gap-6 justify-between py-4">
                  <div>
                    <p className="text-sm">Portfolio Value</p>
                    <h1 className="text-3xl">$9 864.34</h1>
                    <p className="text-green-500">234.23 (30.34%)</p>
                  </div>

                  <div className="text-gray-400 flex flex-col gap-1 text-[0.85rem] leading-normal">
                    <div className="flex gap-2 items-center">
                      <span className="w-3 h-3 bg-blue-700">&nbsp;</span>{" "}
                      <p> Portfolio </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-3 h-3 bg-blue-400">&nbsp;</span>{" "}
                      <p> Dollar </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-3 h-3 bg-[#FF0000]">&nbsp;</span>{" "}
                      <p> ETFs </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36 w-fit">
          <div className="flex justify-between items-center px-2 pb-4 text-sm font-semibold">
            <p>Portfolio History</p>
            <p className="underline">Per Industry</p>
          </div>

          <div className="flex gap-32 flex-wrap">
            <div className="flex gap-4">
              {dummyCardData.map((el) => (
                <PortfolioCard
                  date={el.date}
                  total_dollar={el.total_dollar}
                  rate={el.rate}
                  percent={el.percent}
                  graph={el.graph}
                />
              ))}
            </div>
            <div className="bg-blue-700 rounded-xl relative aspect-square w-[280px] flex items-center justify-center">
              <p className="uppercase flex flex-col items-center absolute text-white">
                <span className="text-lg font-semibold"> 07</span>industries
              </p>
              <SimplePieChart />
              <div className="absolute top-3 right-3 w-5 h-5">
                <BiSolidDoughnutChart className="w-full h-full fill-white" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
