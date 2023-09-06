import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [191000, 173000, 522000, 233000, 603000, 811000, 850000, 233000];
const pData = [136000, 182000, 50000, 24000, 127000, 198000, 131000, 24000];
const xLabels = [
  "East Africa",
  "Egypt",
  "FWN Africa",
  "Kenya",
  "Qatar",
  "Rome",
  "Saudi",
  "U.A.E",
];

export default function StackedBarChart() {
  return (
    <div>
      <div>
        <BarChart
          width={900}
          height={600}
          series={[
            {
              data: uData,
              label: "Professional Studies",
              id: "PSId",
              stack: "total",
              color: "rgb(63,142,78)",
            },
            {
              data: pData,
              label: "Software",
              id: "SId",
              stack: "total",
              color: "rgb(245,239,133)",
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              scaleType: "band",
              categoryGapRatio: 0.5,
              label: "Value in $",
            },
          ]}
        />
      </div>
    </div>
  );
}
