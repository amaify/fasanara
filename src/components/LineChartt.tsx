import type { AgChartOptions } from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import { financialData } from "./data";
import ChartHeading from "./ChartHeading";

export default function LineChart() {
  const chartOptions: AgChartOptions = {
    height: 500,
    background: {
      fill: "transparent",
    },
    data: financialData,
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "budget",
        stroke: "#00efef",
        yName: "Budget",
        marker: {
          enabled: false,
        },
      },
      {
        type: "line",
        xKey: "date",
        yKey: "recurrentExpenditure",
        yName: "Recurrent Expenditure",
        marker: {
          enabled: false,
        },
      },
      {
        type: "line",
        xKey: "date",
        yKey: "capitalExpenditure",
        yName: "Capital Expenditure",
        marker: {
          enabled: false,
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          color: "white",
        },
      },
      {
        type: "number",
        position: "left",
        gridLine: {
          enabled: false,
        },
        label: {
          color: "white",
        },
        line: {
          enabled: true,
        },
        tick: {
          minSpacing: 10,
          maxSpacing: 100,
          width: 0,
        },
        keys: ["budget", "recurrentExpenditure", "capitalExpenditure"],
      },
    ],
    legend: {
      item: {
        label: {
          fontSize: 12,
          color: "white",
        },
        marker: {
          size: 18,
        },
        line: {
          strokeWidth: 3,
          length: 6,
        },
      },
    },
  };
  return (
    <div className="line-chart">
      <ChartHeading subtitle="An overview from 2019 - 2023" title="Performance" />
      <AgChartsReact options={chartOptions} />
    </div>
  );
}
