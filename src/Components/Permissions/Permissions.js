import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import PermissionTable from './PermissionTable'
import Edit from './../../image/edit_24px.png'
import Delete from './../../image/delete_24px.png'
const data=[{
    id: 1,
    dept : "Management Team",
    access_level: "All Access",
    no_of_members: 4,
},
{
    id: 2,
    dept : "Procurement Team",
    access_level: "Restricted Access",
    no_of_members: 8,
},
{
    id: 3,
    dept : "Project Team",
    access_level: "Restricted Access",
    no_of_members: 16,
},
{
    id: 4,
    dept : "IT Team",
    access_level: "Restricted Access",
    no_of_members: 4,
},{
    id: 5,
    dept : "Super Admin",
    access_level: "All Access",
    no_of_members: 1,
},
]
const Permissions = () => {
    return (
       <Sidebar>
           <div className="mx-8 mt-8">
          <div className="mb-4 flex items-center" >
            <button className="bg-purple-600 text-white px-4 py-2 rounded flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
           
              Add Role
            </button>
            <img className="w-4 h-4 ml-6" src={Edit} alt="" />
          <img className="ml-6 w-4 h-4" src={Delete} alt="" />
          </div>
        </div>
           <div className="w-full flex mt-3 ">
             <div className="w-full bg-gray-200 h-12 border-b-2 border-gray-300 flex items-center text-center ">
                <div className="w-4/12  h-10 flex ">
                    <p className=" p-2 ml-5">Department/Role Name</p>
                </div>
                <div className="w-3/12  h-10">
                <p className="p-2">Access Level</p>
                </div>
                <div className="w-2/12  h-10">
                <p className="p-2">No of members</p>
                </div>
                <div className="w-3/12  h-10">
                <p className="p-2">Last Updated</p>
                </div>
              </div>
              
           </div>

             {
                  data.map(data=><PermissionTable key={data.id} data={data}></PermissionTable>)
              }
       </Sidebar>
    );
};

export default Permissions;