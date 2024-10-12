import React from "react";
import arrow from "../assets/images/arrow-down.png";

const Transactions = () => {
  return (
    <div className=" transactions_data flex gap-6 flex-wrap mt-5 items-start px-10">
      <div className="flex-grow flex flex-col gap-4 bg-white p-6 shadow-sm rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-500 font-rubik">
            Recent transactions
          </span>
          <div className="bg-gray-100 p-2 rounded-md">
            <div className="data_analytics">
              <span className="pr_statement st font-rubik">
                Print statement
              </span>
              <span className="print st font-rubik">Print</span>
              <img src="./assets/images/arrow-down.png" alt="" />
            </div>
          </div>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="flex flex-col py-2 gap-4">
            <div className="flex gap-2 items-center w-full">
              <span className="text-sm font-medium text-gray-400 font-rubik">
                Today
              </span>
              <div className="w-full border border-gray-200"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-sm text-gray-800 font-rubik">
                  To Emina Odette
                </span>
                <div className="mt-2">
                  <span className="text-sm text-gray-600 font-rubik">
                    7:14 AM
                  </span>
                  <span className="mx-2">.</span>
                  <span className="text-yellow-500 font-rubik">Pending</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-medium text-sm text-gray-800 font-rubik">
                  - ₦ 10,000.00
                </span>
                <div className="text-sm text-gray-600 font-rubik">
                  ₦ 4,350,000.20
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center text-sm text-[#7d14ff] mt-7 cursor-pointer font-rubik">
          View full transaction history
        </div>
      </div>

      <div className="flex-grow flex flex-col gap-4 bg-white p-6 shadow-sm rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-500 font-rubik">
            Pending actions
          </span>
          <div className="overview flex items-center">
            <span className="font-rubik">Filter</span>
            <div className="data_analytics flex items-center font-rubik bg-gray-100 p-2 rounded-md ml-2">
              All
              <img src={arrow} alt="" className="h-4" />
            </div>
          </div>
        </div>

        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex flex-col py-2 gap-4">
            <div className="flex gap-2 items-center w-full">
              <span className="text-sm font-medium text-gray-400 font-rubik">
                Today
              </span>
              <div className="w-full border border-gray-200"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-sm text-gray-800 font-rubik">
                  You’ve received an offer of ₦ 3,000,000
                </span>
                <div className="mt-2">
                  <span className="text-sm text-gray-600">7:14 AM</span>
                  <span className="mx-2">.</span>
                  <span className="text-yellow-500 font-rubik">Pending</span>
                </div>
              </div>
              <span className="text-purple-600 cursor-pointer font-rubik  whitespace-nowrap">
                Review offer
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
