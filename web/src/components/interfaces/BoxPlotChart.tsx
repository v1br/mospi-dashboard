import { useRef, useEffect, useMemo } from "react";
import {
  type ChartData,
  type ChartOptions,
} from "chart.js/auto";
import "@sgratzl/chartjs-chart-boxplot";
import type { BoxPlotChartProps } from "../../types/types";
import { Chart, registerables } from "chart.js";
import { BoxPlotController, BoxAndWiskers, ViolinController, Violin } from "@sgratzl/chartjs-chart-boxplot";

Chart.register(...registerables, BoxPlotController, BoxAndWiskers, ViolinController, Violin);

const BoxPlotChart: React.FC<BoxPlotChartProps> = ({
  className,
  labels,
  datasets,
  xlabel,
  ylabel,
  legendDisplay,
  legendPosition,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Chart Data
  const data: ChartData<"boxplot"> = useMemo(
    () => ({
      labels,
      datasets: datasets.map(ds => ({
        ...ds,
        borderWidth: ds.borderWidth ?? 1.5,
        outlierColor: ds.outlierColor ?? "#666",
        backgroundColor: ds.backgroundColor ?? "rgba(100, 149, 237, 0.5)", // cornflower blue
        borderColor: ds.borderColor ?? "rgba(100, 149, 237, 1)",
      })),
    }),
    [labels, datasets]
  );

  // Chart Options
  const options: ChartOptions<"boxplot"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: !!xlabel,
            text: xlabel,
          },
        },
        y: {
          title: {
            display: !!ylabel,
            text: ylabel,
          },
        },
      },
      plugins: {
        legend: {
          display: legendDisplay ?? true,
          position: legendPosition ?? "top",
          labels: {
            font: {
              size: 10,
            },
            boxWidth: 10,
            boxHeight: 5,
            padding: 8,
            color: "#444",
            usePointStyle: false,
          },
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: ctx => {
              const v = ctx.raw as any;
              if (!v) return "";
              return `Q1: ${v.q1.toFixed(1)}, Median: ${v.median.toFixed(
                1
              )}, Q3: ${v.q3.toFixed(1)}`;
            },
          },
        },
      },
    }),
    [xlabel, ylabel, legendDisplay, legendPosition]
  );

  useEffect(() => {
		if (!chartRef.current) return;

		if (chartInstanceRef.current) {
			chartInstanceRef.current.destroy();
		}

		chartInstanceRef.current = new Chart(chartRef.current, {
			type: "boxplot",
			data,
			options,
		});

		// Cleanup when component unmounts
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, [data, options]);
  

  return (
    <div className={className ?? ""}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BoxPlotChart;
