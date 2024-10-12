import React, { useState } from "react";
//import "./App.css"; // Import the font and root variables here

import logo from "../assets/images/tradevu.png";
import dashboardicon from "../assets/images/dashboard.png";
import bell from "../assets/images/notification-bell.png";
import arrow from "../assets/images/arrow-down.png";
import menu from "../assets/images/menu.png";
import HeroModal from "./heroModal";
import NotificationDropdown from "./NotificationDropdown";
import AccountDropdown from "./Account";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpennot, setIsOpennot] = useState(false);
  const [isOpenaccount, setIsOpenaccount] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOpenNot = () => {
    setIsOpennot(!isOpennot);
  };
  const handleOpenNotc = () => {
    setIsOpenaccount(!isOpennot);
  };

  return (
    <>
      <HeroModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <NotificationDropdown isOpen={isOpennot} setIsOpen={setIsOpennot} />

      <header
        className="bg-white h-20 px-10 flex justify-center items-center w-full border-b"
        style={{ borderBottomColor: "var(--header_border)" }}
      >
        <div className="mid_header w-full flex justify-between items-center">
          <img src={logo} alt="Tradevu" className="h-8" />
          <nav className="nav_bar   max-custom:hidden block">
            <ul className="flex items-center gap-2 list-none">
              <li
                className="dashboard active flex items-center gap-2 px-4 font-semibold font-rubik"
                style={{ color: "var(--active_text_color)" }}
              >
                <img src={dashboardicon} alt="home icon" className="w-6" />
                Dashboard
              </li>
              <li
                className="flex items-center gap-2 px-4 font-normal font-rubik"
                style={{ color: "var(--primary_text_color)" }}
              >
                Pay
              </li>
              <li
                className="flex items-center gap-2 px-4 font-normal font-rubik"
                style={{ color: "var(--primary_text_color)" }}
              >
                Finance
              </li>
              <li
                className="flex items-center gap-2 px-4 font-normal font-rubik"
                style={{ color: "var(--primary_text_color)" }}
              >
                Flex
              </li>
            </ul>
          </nav>
          <div className=" flex gap-8 items-center cursor-pointer">
            <img
              src={bell}
              alt="notification"
              style={{
                height: "32px",
              }}
              onClick={() => handleOpenNot()}
            />
            <img
              src={menu}
              alt="menu"
              className="h-8  hidden max-custom:block "
              onClick={() => handleOpen()}
            />
            <div
              className="business_name  max-custom:hidden flex items-center gap-4 cursor-pointer relative"
              onClick={() => handleOpenNotc()}
            >
              <div
                className="circle_name h-9 w-9 rounded-full"
                style={{ boxShadow: "0 0 0 0.85px #d9cdff" }}
              ></div>
              <span
                className="font-medium font-rubik"
                style={{ color: "#101828" }}
              >
                Vance Refrigeration
              </span>
              <img src={arrow} alt="arrow down" className="h-4" />
            </div>
          </div>
          <AccountDropdown
            isOpen={isOpenaccount}
            setIsOpen={setIsOpenaccount}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
