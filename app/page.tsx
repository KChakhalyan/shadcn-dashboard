import Barchart from "@/components/charts/Barchart";
import ChartAreaLegend from "@/components/charts/ChartAreaLegend";
import PieChartDonut from "@/components/charts/PieChartDonut";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2"><Barchart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg "><PieChartDonut /></div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><ChartAreaLegend /></div>
      <div className="bg-primary-foreground p-4 rounded-lg ">Test</div>
    </div>
  );
}
