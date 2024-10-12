import React from "react";
import angle from "../assets/images/angle_down.png";
import user from "../assets/images/user.png";
import logout from "../assets/images/logout.png";
interface HeroModalProps {
  isOpen: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AccountDropdown: React.FC<HeroModalProps> = ({ isOpen, setIsOpen }) => {
  // console.log(isOpen);
  return (
    isOpen && (
      <div
        className="absolute top-10  z-10 bg-white shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.15)] rounded-lg pl-4 pr-4 pt-2 pb-2"
        id="dropdownssp"
        style={{
          top: "80px",
          maxWidth: "270px",
          width: "100%",
          right: "40px",
          left: "auto",
        }}
      >
        <div className="inner_create_group w-full">
          <div
            className="manage_each_toggle_account flex items-center bg-[#F2F4F7] p-2 cursor-pointer"
            id="dropdownButtonsss"
          >
            <div className="content_toggle flex flex-col">
              <span className="top_content font-normal text-gray-900 text-base">
                Switch account
              </span>
              <span className="bottom_content font-normal text-gray-500 text-sm">
                Access your other businesses
              </span>
            </div>
            <img src={angle} alt="" className="h-4 ml-2" />
          </div>
          <div className="each_item_create flex items-center h-12 cursor-pointer border-b border-[#D9CDFF] py-2">
            <img src={user} alt="" className="h-4 mr-3" />
            <span className="font-normal text-gray-900 text-base">
              Manage account
            </span>
          </div>
          <div className="each_item_create flex items-center h-12 cursor-pointer py-2">
            <img src={logout} alt="" className="h-4 mr-3" />
            <span className="font-normal text-gray-900 text-base">Logout</span>
          </div>
        </div>
      </div>
    )
  );
};

export default AccountDropdown;
