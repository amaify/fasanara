export default function ChartHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="chart-heading">
      <h2>Funds performance details</h2>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
