import React, { useState } from "react";
import close from "../assets/images/close.png";
import tradevu from "../assets/images/tradevu.png";
import dashboardicon from "../assets/images/dashboard.png";
import arrow from "../assets/images/arrow-down.png";

interface HeroModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeroModal: React.FC<HeroModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed bg-white h-screen w-full z-50 top-0 px-6 ${
        isOpen ? "block" : "hidden"
      } overflow-hidden box-border`}
    >
      <div className="flex justify-between items-center h-20">
        <img src={tradevu} alt="Tradevu" className="h-6" />
        <img
          src={close}
          alt="Close"
          className="h-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="mt-10">
        <ul className="flex flex-col gap-8 items-end  font-rubik">
          <li className="flex items-center gap-2 active">
            <img src={dashboardicon} alt="Home" className="h-6" />
            <span>Dashboard</span>
          </li>
          <li>Pay</li>
          <li>Finance</li>
          <li>Flex</li>
        </ul>

        <div className="flex items-end gap-4 cursor-pointer relative justify-end mt-10">
          <div className="h-8 w-8 rounded-full shadow-[0_0_0_0.85px_#d9cdff]"></div>
          <span className="text-[#101828] font-medium font-rubik">
            Vance Refrigeration
          </span>
          <img src={arrow} alt="Dropdown" className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
