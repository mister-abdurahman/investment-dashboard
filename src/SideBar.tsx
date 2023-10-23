import React from "react";
import { BiLogOutCircle, BiWalletAlt } from "react-icons/bi";
import { TbDashboard } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import avatar from "./assets/female-avatar-removebg-preview.png";

export default function SideBar() {
  return (
    <div className="basis-3/12 p-6 grid grid-col justify-between">
      <div>
        <div className="grid avatar-column-grid gap-x-4">
          <figure className="w-12 row-start-1 row-end-3">
            <img src={avatar} className="w-full" alt="Avatar" />
          </figure>
          <h5 className="font-bold">Kristen Ramos</h5>
          <p className="col-start-2 col-end-3 text-sm">
            kristenramos@gmail.com
          </p>
        </div>

        <div className="mt-8">
          <ul className="font-semibold flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <span className="w-6">
                <TbDashboard className="w-full h-full" />
              </span>
              <p className="text-sm">DashBoard</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6">
                <BiWalletAlt className="w-full h-full" />
              </span>
              <p className="text-sm">Holdings</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6">
                <VscGraph className="w-full h-full" />
              </span>
              <p className="text-sm">Performance</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-auto">
        <p className="flex items-center gap-3">
          <span className="w-5">
            <BiLogOutCircle className="w-full h-full" />
          </span>{" "}
          Logout
        </p>
      </div>
    </div>
  );
}
