import { useState } from "react";
import CreateNew from "./createnew";
import sendlogo from "../assets/images/sendlogo.png";
import add from "../assets/images/add.png";

const TopButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="button_card mt-4 flex justify-start w-100 ">
      <div className="relative flex gap-4 w-100">
        <button
          className="d-btn flex items-center  text-[#5e01d6] font-medium text-base px-4 py-3 rounded-lg font-rubik w-[178px]"
          style={{ background: "var(--secondary_button_color)" }}
        >
          <img src={sendlogo} alt="Send Money" className="h-6 mr-2" />
          Send money
        </button>
        <button
          className="ceate_button d-btn flex items-center  text-[#fbfaff] font-medium text-base px-4 py-3 rounded-lg font-rubik w-[178px]"
          onClick={toggleDropdown}
          style={{ background: "var(--primary_button_color)" }}
        >
          <img src={add} alt="Create New" className="h-6 mr-2" />
          Create new
        </button>

        {dropdownOpen && <CreateNew />}
      </div>
    </div>
  );
};

export default TopButton;
