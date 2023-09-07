import React from "react";
import Leaves from "../Assets/leaves.png";
import Search from "../Assets/search.png";
import Notes from "../Assets/notes.png";
import Book from "../Assets/book.png";
import Man from "../Assets/man.png";
import Circle from "../Assets/circle.png";
import Boy from "../Assets/boy.png";
import Arrow from "../Assets/arrow.png";
function Navbar() {
  return (
    <div>
      <div>
        <div className="max-sm:flex-col lg:w-full h-16 flex bg-slate-900 justify-between ">
          <div className="flex">
            <div className="w-16 bg-white">
              <img src={Leaves} />
            </div>
            <div className="self-center">
              <p className=" text-3xl font-bold ms-10 text-white">Software</p>
            </div>
            <button className="w-32 h-8 self-center ms-5 rounded-md bg-slate-500 text-white">
              Summary View
            </button>
          </div>
          <div className="flex me-4">
            <div className="flex self-center gap-2 w-80 h-10 border-black border-2 rounded-md bg-gray-800">
              <div className="self-center">
                <img className="w-6 h-6 ms-2" src={Search} />
              </div>
              <div className="w-64 h-9 self-center">
                <input
                  className="outline-none border-none  pt-1 text-white bg-gray-800 items-center"
                  placeholder="Search"
                />
              </div>
            </div>
            <button className="w-auto h-auto p-1 self-center text-center flex ms-5 rounded-md bg-slate-500 text-white text-lg gap-1">
              <img className="w-6 h-6 ms-2 self-center" src={Notes} />
              Notes
            </button>
            <div className="w-28 h-8 self-center ms-6">
              <div className="flex">
                <img className="w-6 h-6 ms-2" src={Book} />
                <img className="w-6 h-6 ms-2" src={Man} />
                <img className="w-6 h-6 ms-2" src={Circle} />
              </div>
            </div>
            <div className="border-r-white border-2 h-10 self-center ms-8" />
            <div className=" self-center flex gap-2">
              <div className="w-10 h-10 bg-white rounded-full ms-5">
                <img src={Boy} />
              </div>
              <div>
                <p className="text-white text-xs">Welcome,</p>
                <h6 className="text-white">David Williams</h6>
              </div>
              <div className=" self-center">
                <img className="w-6 h-6 ms-2" src={Arrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
