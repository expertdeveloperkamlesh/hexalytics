import React from 'react'
import BarCharts from './Charts/BarCharts'
// import TreeMap from "./Components/TreeMap"
import LineChart from "./Charts/Linechart"
import DonutChart from "./Charts/DonutChart"
import PieChart from "./Charts/PieChart"
import Main from "./Components/Main"
import Nav from "./Components/Navbar"
function App() {
  return (
    <div>
      {/* <BarCharts/> */}
      {/* <TreeMap/> */}
      {/* <LineChart /> */}
      {/* <DonutChart /> */}
      {/* <PieChart /> */}
      <Nav/>
      <Main/>
    </div>
  )
}

export default App