import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "./../../image/Ellipse_126.png"
const PermissionTable = ({data}) => {
const {dept,access_level,no_of_members}=data
    return (
        <div className="w-full  h-12 border-b-2 border-gray-300 flex items-center text-center my-1 ">
                <div className="w-4/12  h-10 text-left flex items-center pl-2 my-1">
            <img className="w-3 h-3 " src={Circle} alt="" />
                    <p className="pl-2 ">{dept}</p>
                </div>
                <div className="w-3/12  h-10 mt-1">
                <p className={ access_level === "All Access" ? "p-1 mb-1 px-3 bg-green-200 rounded-3xl border-1 border-green-500 text-green-500" : "p-1 px-3 bg-red-200 rounded-3xl border-1 border-red-500 text-red-500"}>{access_level}</p>
                </div>
                <div className="w-2/12  h-10">
                <p className="py-2">{no_of_members} </p>
                </div>
                <div className="w-3/12  h-10 flex pl-20">
         
                <p className="">
                    1 min ago</p>
            <Link to="/accessControl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 ml-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
            </Link>
                </div>
              </div>
    );
};

export default PermissionTable;