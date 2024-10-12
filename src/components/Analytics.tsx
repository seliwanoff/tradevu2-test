import React, { useState } from "react";
import CreateNew from "./createnew";
import TopButton from "./TopButton";
import copy from "../assets/images/copy.png";
import arrow from "../assets/images/arrow-down.png";

const DataContainer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="data_container flex gap-6 px-10 box-border overflow-x-auto flex-nowrap w-full">
        {/* Balance Card */}
        <div
          className="each_data_card flex  flex-1 flex-col bg-white rounded-lg border border-gray-100 p-4 flex-grow-0 flex-shrink-0 basis-[264px]"
          style={{
            flexGrow: "1",
          }}
        >
          <div className="each_mid_inner-card flex flex-col gap-2">
            <span className="text-gray-500 font-medium text-sm font-rubik">
              Your balance
            </span>
            <div className="balance_check flex items-center gap-1 mt-4 text-2xl font-semibold text-gray-800">
              <sub className="text-gray-500 text-2xl font-rubik font-normal">
                ₦
              </sub>
              4,350,000
              <sub className="text-gray-500 text-2xl font-rubik font-normal ">
                .20
              </sub>
            </div>
            <div className="lower_bank_details flex mt-2 items-center">
              <div className="mid_bank_detail flex items-center gap-2 font-rubik">
                <span className="text-sm font-rubik">0912873465</span>
                <img src={copy} alt="Copy" className="h-4 cursor-pointer" />
              </div>
              <span className="ml-2 text-sm text-gray-500 font-rubik">
                . &nbsp;&nbsp; Sudo Bank
              </span>
            </div>
          </div>
        </div>

        {/* Active Orders Card */}
        <div
          className="each_data_card flex flex-1 flex-col bg-white rounded-lg border border-gray-100 p-4 flex-grow-0 flex-shrink-0 basis-[264px]"
          style={{
            flexGrow: "1",
          }}
        >
          <div className="each_mid_inner-card flex flex-col gap-2">
            <span className="text-gray-500 font-medium text-sm font-rubik">
              Active orders
            </span>
            <div className="balance_check mt-4 text-2xl font-semibold text-gray-800">
              <span>7</span>
            </div>
            <div className="lower_bank_details flex mt-2 items-center">
              <div className="mid_bank_detail flex items-center gap-2 font-rubik">
                <span className="text-sm font-rubik">₦ 0.00</span>
              </div>
              <span className="ml-2 text-sm text-gray-500 font-rubik">
                overdue
              </span>
            </div>
          </div>
        </div>

        {/* Active Loans Card */}
        <div
          className="each_data_card flex  flex-col bg-white rounded-lg border border-gray-100 p-4 flex-grow-0 flex-shrink-0 basis-[264px]"
          style={{
            flexGrow: "1",
          }}
        >
          <div className="each_mid_inner-card flex flex-col gap-2">
            <span className="text-gray-500 font-medium text-sm font-rubik">
              Active loans
            </span>
            <div className="balance_check mt-4 text-2xl font-semibold text-gray-800 font-rubik">
              <span>10</span>
            </div>
            <div className="lower_bank_details flex mt-2 items-center">
              <div className="mid_bank_detail flex items-center gap-2">
                <span className="text-sm font-rubik">2</span>
              </div>
              <span className="ml-2 text-sm text-gray-500 font-rubik">
                pending payment
              </span>
            </div>
          </div>
        </div>

        {/* Unpaid Invoices Card */}
        <div
          className="each_data_card flex  flex-col bg-white rounded-lg border border-gray-100 p-4 flex-grow-0 flex-shrink-0 basis-[264px]"
          style={{
            flexGrow: "1",
          }}
        >
          <div className="invoices flex justify-between items-center">
            <span className="text-gray-500 font-medium text-sm font-rubik">
              Unpaid Invoices
            </span>
            <div className="alltime flex items-center font-semibold text-gray-800 text-sm font-rubik">
              All time
              <img src={arrow} alt="Dropdown" className="h-4 ml-1" />
            </div>
          </div>
          <div className="balance_check mt-4 text-2xl font-semibold text-gray-800">
            <span>2</span>
          </div>
          <div className="lower_bank_details flex mt-2 items-center">
            <div className="mid_bank_detail flex items-center gap-2 font-rubik">
              <span className="text-sm font-rubik">₦ 720,000.00</span>
            </div>
            <span className="ml-2 text-sm text-gray-500 font-rubik">
              overdue
            </span>
          </div>
        </div>
      </div>
      <div className=" md:hidden  ">
        <TopButton />
      </div>
    </>
  );
};

export default DataContainer;
