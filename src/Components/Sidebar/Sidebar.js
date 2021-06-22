import React from "react";
import icon from "./../../image/Subtract.png";
import avatar from "./../../image/Oval.png";
import box from "./../../image/view_module_24px.png";
import dashboard from "./../../image/dashboard_24px.png";
import access from "./../../image/security_24px.png";
import businessBox from "./../../image/business_center_24px.png";
import Notifications from "./../../image/notifications_24px.png";
import Help from "./../../image/help_outline_24px.png";
import RssFeed from "./../../image/rss_feed_24px.png";
import Sync from "./../../image/sync_24px.png";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-3/12 ">
        <div className=" flex py-6 pl-8 ">
          <img className="w-8 h-8" src={icon} alt="" />
          <p className=" text-2xl font-bold text-blue-900">MYSITE</p>
        </div>

        <div className="bg-gray-50   pt-6 text-gray-400 flex flex-col items-start h-screen">
          <div className="ml-2 items-center flex pl-2">
            <img className="w-4 h-4 " src={dashboard} alt="" />
            <button className="pl-5">Projects </button>
          </div>
          <div className="ml-2 items-center flex my-3 pl-2">
            <img src={businessBox} alt="" className="w-4  h-4" />
            <button className="pl-4">Organization Profile</button>
          </div>
          <div className=" bg-purple-200  py-3 w-full border-l-4 border-purple-600 ">
            <div className="pl-3 flex items-center">
              <img className="w-4 h-4" src={access} alt="" />
              <button className="pl-5 text-purple-600">Access Control</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 h-12  ">
        <div className="flex justify-end pr-6 pt-2 items-center">
          <img className="h-8 w-8 mr-2" src={avatar} alt="" />
          <p className="pt-3">Kishore</p>
          <img className="h-6 w-5 mx-4 pt-1" src={Notifications} alt="" />
          <img className="h-6 w-5 mx-4 pt-1" src={Help} alt="" />
        </div>
        <div className="w-full flex mt-3">
          <div className=" w-2/12 flex">
            <img className="h-4 w-6 mt-3 mx-1 " src={RssFeed} alt="" />

            <p className="pt-2 text-purple-600">Permissions</p>
            <hr
              style={{ height: "4px", opacity: 1, margin: "0rem" }}
              className="bg-purple-700 rounded-t-lg "
            />
          </div>
          <div className=" w-3/12 	pt-1">
            <div className="border-l-2 border-gray-200 h-8 flex  items-center">
              <img className="w-6 h-4 ml-2" src={box} alt="" />
              <p className="pl-2 pt-3">Approval Matrix</p>
            </div>
          </div>

          <div className=" w-5/12 "></div>
          <div className=" w-3/12 flex pt-2 items-center">
            <img src={Sync} className="w-4 h-4 mb-3 mr-2" alt="" />
            <p>Last synced 15 mins ago</p>
          </div>
        </div>
        <hr
          style={{ height: "1px", opacity: 1, margin: "0rem" }}
          className="bg-gray-200 rounded-t-lg "
        />

        <div className="mx-8">
          {children}
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
