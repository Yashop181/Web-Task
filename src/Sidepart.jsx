import "./Sidepart.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const Sidepart = () => {
  return (
    <>
      <div className="all-setting">
        <div className="history">
          <IoSearchOutline className="search-icon" />
          <p>Search watch history</p>
        </div>
        <hr />
        <div className="history-second">
          <IoCalendarClearOutline />
          <p>Clear all watch history</p>
        </div>
        <div className="history-second" >
          <IoSettingsOutline />
          <p>manage all history</p>
        </div>
        <div>
          <p>Comments</p>
          <p>Posts</p>
          <p>live Chat</p>
        </div>
      </div>
    </>
  );
};

export default Sidepart;
