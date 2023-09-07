import React from "react";
import BarChart from "../Charts/BarCharts";
import LineChart from "../Charts/Linechart";
import VerticlaLineChart from "../Charts/VerticalLineChart";
import PieChart from "../Charts/PieChart";
import DonutChart from "../Charts/DonutChart";
import TreeMap from "../Charts/TreeMap";
import Africa from "../Assets/africa.jpeg";
import Uparrow from "../Assets/up-arrow.png";
import Notes from "../Assets/notes.png";
function Main() {
  return (
    <div>
      <div>
        <div className=" w-full h-12 bg-slate-800">
          <div className="flex">
            <button className="text-white max-sm:text-sm text-lg w-auto h-auto px-7 bg-green-700 rounded-b-md z-10">
              Summary View
            </button>
            <button className="text-white max-sm:text-sm text-lg w-auto h-auto px-7 bg-slate-600 rounded-b-md z-10">
              Detailed View
            </button>
            <button className="text-white max-sm:text-sm text-lg w-auto h-auto p-4 bg-slate-600 rounded-b-md z-10">
              Drilldown Analysis
            </button>
          </div>
        </div>
        <div className="section1 grid grid-cols-1 lg:grid-cols-2 max-sm:flex max-sm:flex-col">
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
                    <div className="w-40 h-18 bg-slate-600 rounded-lg pt-1 ">
                      <div className=" ms-1 text-xs text-white">
                        <p>{item.title}</p>
                        <p>{item.total}</p>
                      </div>
                      <div className=" ms-1 flex gap-2 text-xs text-white">
                        <div>
                          <p>{item.price}</p>
                        </div>
                        <div className="flex pb-1">
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
            <div className=" h-3/5">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="section2 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4 m-4 border-2 border-solid border-slate-700 rounded-lg">
          <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
            Software Brands by Ageing - Quarterly
          </h1>
          <div className="h-96 mt-4">
            <TreeMap />
          </div>
        </div>
        <div className="p-4 m-4 border-2 border-solid border-slate-700 rounded-lg">
          <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
            Accounts Receivables - In US $
          </h1>
          <button className="w-auto h-auto p-3 self-center my-4 rounded-md bg-slate-600 text-white text-lg gap-1">
            Grand Total $232K
          </button>
          <div className="h-96">
            <LineChart />
          </div>
        </div>
      </div>
      <div className="section3 grid grid-cols-1 lg:grid-cols-3">
        <div className="p-4 m-4 border-2 border-solid border-slate-700 rounded-lg">
          <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
            Professional Services vs Software - Quarterl 2023
          </h1>
          <div className="h-96">
            <DonutChart />
          </div>
        </div>
        <div className="p-4 m-4 border-2 border-solid border-slate-700 rounded-lg">
          <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
            Business Unit Wise Ageing
          </h1>
          <div className="h-96">
            <PieChart />
          </div>
        </div>
        <div className="p-4 m-4 border-2 border-solid border-slate-700 rounded-lg">
          <h1 className="text-white text-xl font-semibold w-auto h-auto p-2 mt-4">
            Top Cluster - Software
          </h1>
          <div className="h-96">
            <VerticlaLineChart />
          </div>
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
