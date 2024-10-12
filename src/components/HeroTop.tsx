import React, { useState } from "react";
import eye from "../assets/images/eye-slash.png";
import NG from "../assets/images/NG.png";
import arrow from "../assets/images/arrow-down.png";
import sendlogo from "../assets/images/sendlogo.png";
import add from "../assets/images/add.png";
import CreateNew from "./createnew";
import TopButton from "./TopButton";

const HeroTop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="hero_top flex justify-between ">
      {/* Left Section */}
      <div className="left_data_name">
        <div className="name_greetings">
          <div className="name_eye flex items-center gap-2">
            <span className="font-semibold text-gray-700 font-rubik">
              Hello Bob,
            </span>
            <img src={eye} alt="Hide" className="h-6" />
          </div>
        </div>
        <div className="overview">
          <span className="font-normal text-gray-500 text-sm leading-4 mr-2 font-rubik">
            Overview of your activity in
          </span>
          <div className="currency_container inline-block bg-gray-100 p-2 rounded-md mt-2">
            <div className="data_analytics flex items-center gap-1 font-medium text-base cursor-pointer font-rubik">
              <img src={NG} alt="NGN" className="h-4" />
              NGN
              <img src={arrow} alt="Dropdown" className="h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block">
        <TopButton />
      </div>
    </div>
  );
};

export default HeroTop;
