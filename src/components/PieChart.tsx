import { AgChartsReact } from "ag-charts-react";
import type { AgChartOptions } from "ag-charts-community";
import { getData } from "../utils";
import ChartHeading from "./ChartHeading";

export default function PieChart() {
  const colours = ["#004c64", "#0098c6", "#00c3ff", "#39d0ff", "#00739d", "#0089ae"];

  const sumTotal = getData()
    .map((value) => value.amount)
    .reduce((acc, curr) => acc + curr, 0);

  const options: AgChartOptions = {
    data: getData(),
    height: 500,
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "allocations",
        fills: colours,
        sectorLabelKey: "amount",
        calloutLabelKey: "amount",
        strokeWidth: 0,
        rotation: 320,

        calloutLine: {
          length: 25,
          colors: ["rgba(255, 255, 255, 0.3)"],
        },
        calloutLabel: {
          color: "white",
          fontWeight: "normal",
          fontSize: 16,
          formatter: ({ value }) => {
            const formattedValue = ((value / sumTotal) * 100).toFixed(0);
            if (+formattedValue > 7) return "";
            return `${formattedValue}%`;
          },
        },
        sectorLabel: {
          color: "white",
          fontWeight: "normal",
          fontSize: 16,
          formatter: ({ value }) => `${((value / sumTotal) * 100).toFixed(0)}%`,
        },
      },
    ],
    background: {
      fill: "transparent",
    },
    legend: {
      item: {
        label: {
          fontSize: 12,
          color: "white",
        },
        marker: {
          size: 18,
          strokeWidth: 0,
          shape: "square",
        },
        line: {
          strokeWidth: 3,
          length: 6,
        },
      },
    },
  };

  return (
    <div className="pie-chart">
      <ChartHeading title="Current Allocations" />
      <AgChartsReact options={options} />
    </div>
  );
}
