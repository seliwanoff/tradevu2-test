import invoice from "../assets/images/invoices_drop.png";
import box from "../assets/images/box.png";
import ship from "../assets/images/ship.png";

const CreateNew = () => {
  return (
    <div className="create_drop_down absolute bg-white shadow-md rounded-lg mt-14 w-48 right-0">
      <div className="inner_create_group p-4">
        <div className="each_item_create flex items-center gap-2 py-2 font-rubik">
          <img src={invoice} alt="New Invoice" className="h-4 mr-3" />
          <span>New invoice</span>
        </div>
        <div className="each_item_create flex items-center gap-2 py-2 font-rubik">
          <img src={box} alt="New Order" className="h-4 mr-3" />
          <span>New order</span>
        </div>
        <div className="each_item_create flex items-center gap-2 py-2 font-rubik">
          <img src={ship} alt="New Shipment" className="h-4 mr-3" />
          <span>New shipment</span>
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
