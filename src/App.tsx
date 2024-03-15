import { useState } from "react";
import LineChart from "./components/LineChartt";
import PieChart from "./components/PieChart";

export default function App() {
  const [defaultLabel, setDefaultLabel] = useState<"Line Chart" | "Pie Chart">("Pie Chart");
  let buttonTitle = "";

  if (defaultLabel === "Line Chart") buttonTitle = "Show Pie Chart";
  if (defaultLabel === "Pie Chart") buttonTitle = "Show Line Chart";

  const onChartToggle = () => {
    if (defaultLabel === "Line Chart") {
      setDefaultLabel("Pie Chart");
      return;
    }

    setDefaultLabel("Line Chart");
  };

  return (
    <main>
      <h1 className="main-heading">Fasanara Charts</h1>
      <button onClick={onChartToggle}>{buttonTitle}</button>
      <div className="chart-container">
        {defaultLabel === "Pie Chart" && <PieChart />}
        {defaultLabel === "Line Chart" && <LineChart />}
      </div>
    </main>
  );
}
