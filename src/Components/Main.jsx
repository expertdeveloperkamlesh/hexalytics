import React from "react";
import BarChart from "./BarCharts";
import LineChart from "./Linechart";
import DonutChart from "./DonutChart";
import Africa from "../Assets/africa.jpeg";
import Uparrow from "../Assets/up-arrow.png";
import Notes from "../Assets/notes.png";
function Main() {
  return (
    <div>
      <div>
        <div className=" w-full h-12 bg-slate-800">
          <div className="flex">
            <button className="text-white text-lg h-14 w-44 bg-green-700 rounded-b-md z-10">
              Summary View
            </button>
            <button className="text-white text-lg h-14 w-44 bg-slate-600 rounded-b-md z-10">
              Detailed View
            </button>
            <button className="text-white text-lg h-14 w-44 bg-slate-600 rounded-b-md z-10">
              Drilldown Analysis
            </button>
          </div>
        </div>
        <div className="section1 grid grid-cols-2 max-sm:flex max-sm:flex-col">
          <div className="bg-[length:200px_100px]">
            <img className="rounded-lg" src={Africa} />
          </div>
          <div>
            <div className="flex mt-4">
              <button className="w-auto h-auto p-1 self-center flex ms-5 rounded-md bg-slate-600 text-white text-lg gap-1">
                <img className="w-6 h-6 ms-2 self-center" src={Notes} />
                Show Applied Filter
              </button>
              <button className="w-auto h-auto p-1 self-center text-center flex ms-5 rounded-md bg-slate-500 text-white text-lg gap-1">
                <img className="w-6 h-6 ms-2 self-center" src={Notes} />
                Timeline Filter
              </button>
            </div>
            <h1 className="text-white text-xl font-semibold w-auto h-auto p-2">
              Overall Scorecard
            </h1>
            <div className="w-auto h-auto">
              <div className="flex flex-wrap gap-2 place-content-center">
                {data.map((item) => {
                  return (
                    <div className="w-44 h-16 bg-slate-600 rounded-lg ">
                      <div className=" text-xs text-white">
                        <p>{item.title}</p>
                        <p>{item.total}</p>
                      </div>
                      <div className="flex gap-2 text-xs text-white">
                        <div>
                          <p>{item.price}</p>
                        </div>
                        <div className="flex">
                          <img className="w-4 h-4" src={Uparrow} />
                          <p>{item.percentage}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
              Cluster Professional Service and Software
            </h1>
            <BarChart />
          </div>
        </div>
      </div>
      <div className="section2 grid grid-cols-2">
        <div
        className="w-full h-full p-4 m-4 border-2 border-solid border-white rounded-lg"
        >
          <LineChart/>
        </div>
        <div
        className="w-full h-full p-4 border-2 border-solid border-white rounded-lg"
        >
          <DonutChart/>
        </div>
      </div>
    </div>
  );
}

export default Main;

const data = [
  {
    id: 1,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 2,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 3,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 4,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 5,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 6,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 7,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 8,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 9,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
  {
    id: 10,
    title: "Cluster - Professional Service",
    total: "Grand Total",
    price: "$ 22,165,169.53",
    percentage: "+2%",
  },
];
