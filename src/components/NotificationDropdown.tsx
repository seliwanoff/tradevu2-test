import React from "react";
import profile from "../assets/images/Profile.png";
interface HeroModalProps {
  isOpen: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NotificationDropdown: React.FC<HeroModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  //console.log(isOpen);
  return (
    isOpen && (
      <div
        className={` not-mid-drop absolute top-20 right-80 z-10 bg-white shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.15)] rounded-lg pr-4 pl-4 pt-2 pb-2`}
        style={{
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <div className="inner_create_group w-full">
          <div className="each_item_create sidename flex items-center h-12 cursor-pointer border-b">
            <div className="name_drop_business flex flex-col  w-100">
              <span className="text-gray-900 font-medium font-rubik ">
                Notifications
              </span>
            </div>
          </div>
          <div className="notification_message overflow-y-auto h-96">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                className="each_message flex items-center gap-4 py-4 border-b border-gray-200"
                key={index}
              >
                <img src={profile} alt="" className="h-8" />
                <div className="line_message flex flex-col gap-2">
                  <p className="font-normal text-gray-900 font-rubik">
                    S&B Inc. signed the lender’s agreement
                  </p>
                  <span className="text-gray-500 text-sm font-rubik">
                    Just now
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default NotificationDropdown;
