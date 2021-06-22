import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AccessControlTable from "./AccessControlTable"
import Edit from './../../image/edit_24px.png'
const data=[{
    id: 1,
    dept: "Budget",
    access_level: "All Access",
    summary: ["View", "Create","Edit", "Delete"],
    
},
{
    id: 2,
    dept: "Bidding",
    access_level: "No Access",
    summary: [],
    
},
{
    id: 3,
    dept: "Vendor Portal",
    access_level: "Restricted Access",
    summary: ["View", "Create"],
    
},
{
    id: 4,
    dept: "Purchase Order/Work order",
    access_level: "Restricted Access",
    summary: ["View", "Create"],
    
},
{
    id: 5,
    dept: "Organizational Profile",
    access_level: "All Access",
    summary: ["View", "Create","Edit", "Delete"],
    
},
{
    id: 6,
    dept: "Permissions & Access Control",
    access_level: "No Access",
    summary: [],
    
}
]
const AccessControl = () => {
  return (
    <Sidebar>
     
        <div className="flex mt-4">
        <Link to="/"> 
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
          <p className="pl-2 text-purple-700">Management Team</p>
          <img className="w-4 h-4  mt-1 ml-2" src={Edit} alt="" />
        </div>
        <div className="">
          <div className="w-full flex mt-3">
            <div className=" w-2/12  mr-2">
              <p className="pt-2">Access Control</p>
              <hr
                style={{ height: "4px", opacity: 1, margin: "0rem" }}
                className="bg-purple-700 rounded-t-lg "
              />
            </div>
            <div className=" w-2/12 	h-8">
              <div className="border-l-2 border-gray-300 mt-2">
                <p className="pl-2 ">Assigned Member</p>
              </div>
            </div>
          </div>
          <hr
          style={{ height: "1px", opacity: 1, margin: "0rem" }}
          className="bg-gray-200 rounded-t-lg "
        />
        </div>
        <div className="w-full flex mt-3 ">
             <div className="w-full bg-gray-200 h-12 border-b-2 border-gray-300 flex items-center text-center ">
                <div className="w-4/12  h-10 flex ">
                    <p className=" p-2 ml-5 ml-8">Department/Role Name</p>
                </div>
                <div className="w-3/12  h-10">
                <p className="p-2">Access Level</p>
                </div>
                <div className="w-3/12  h-10">
                <p className="p-2">Summary</p>
                </div>
                <div className="w-2/12  h-10">
                <p className="p-2">Last Updated</p>
                </div>
              </div>
              </div>
              {
                  data.map(data=><AccessControlTable key={data.id} data={data}></AccessControlTable>)
              }
    
    </Sidebar>
  );
};

export default AccessControl;
