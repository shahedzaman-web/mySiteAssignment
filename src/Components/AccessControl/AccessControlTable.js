import React, { useState } from 'react';
import "./Style.css"
const AccessControlTable = ({data}) => {
    const {dept,access_level,summary}= data;
    const [isClicked, setIsClicked] = useState(false);
    const handleClick =()=>{
        setIsClicked(!isClicked)
    }
    return (
        <>
        <div className="w-full  h-16 flex items-center text-center ">
        <div className="w-4/12  h-10 text-left flex items-center pl-2">
        <button onClick={handleClick}>
      { !isClicked && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>}

{
    isClicked && 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

}


        </button>
            <p className="pl-2">{dept}</p>
        </div>
   
        <div className="w-3/12  h-10 mt-2">
        <p className={ access_level === "All Access" ? "mb-1 py-1 bg-green-200 rounded-3xl border-1 border-green-500 text-green-500" : (access_level === "Restricted Access" ?  "py-1 bg-red-200 rounded-3xl border-1 border-red-500 text-red-500" : "py-1 bg-gray-100 rounded-3xl border-1 border-gray-300 text-gray-300" )  }>{access_level}</p>
        </div>
        <div className="w-3/12  h-10">
        <p className="py-2">{summary.length ===0 ? "-" : <SummaryData summary={summary}></SummaryData> } </p>
        </div>
        <div className="w-2/12  h-10 flex pl-4 justify-center items-center pt-3">
 
        <p className="">
            1 min ago</p> 
          
<div className="pl-2">
<label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
</label>
</div>

        </div>
 
      </div>
      {
    isClicked && (
        <div className="w-full h-60 flex ">
          <div className="w-1/2">
          <p className="ml-10">All aspects in the bidding module</p>
            <div className="flex flex-col ml-20">
                <p className="my-2">Access Control</p>
                <label><input className="checked:bg-purple-600" type="radio" name="question-one" value="no" /> All Access
               <br />
                <small className="ml-4 text-gray-300">Can access all items</small>
                </label>
                <label><input type="radio" name="question-one" value="no" /> Restricted Access
                <br />
                <small className="ml-4 text-gray-300">Can access only  assigned or created items</small>
                </label>
            </div>
          </div>
          <div className="w-1/2 mt-10  py-4">
              <div className="border-l-2 border-gray-200 pl-4">
              <p className="mb-2">Permissions</p>
            <div className="flex flex-col">
              <label><input className="pl-8  checked:bg-purple-600 " type="checkbox" name="question-one" value="no" /> View Items in access</label>
              <label><input className="pl-4" type="checkbox" name="question-one" value="no" /> Edit items in access</label>
              <label><input className="pl-4" type="checkbox" name="question-one" value="no" /> Create Items in access</label>
              <label><input className="pl-4" type="checkbox" name="question-one" value="no" /> Delete Items in access</label>
              </div>
            </div>
            
          </div>
            
        </div>
    )

}
<hr
          style={{ height: "2px", opacity: 1, margin: "0rem" }}
          className="bg-gray-200 rounded-t-lg "
        />
      </>
    );
};

export default AccessControlTable;

function SummaryData({summary}){
    
    return(
        <div className="flex justify-center">
            {
                summary.map((data,index) =><div key={index}>
                  <p className={(summary.length-1) === index ? "pl-1": "border-r-2 border-gray-300 px-1"}>{data}</p>
                </div>)
            }
        </div>
    )
}
