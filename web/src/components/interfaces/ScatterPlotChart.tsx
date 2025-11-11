import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import { useRef, useEffect, useMemo } from "react";
import type { ScatterPlotChartProps } from "../../types/types";

const ScatterPlotChart: React.FC<ScatterPlotChartProps> = ({
  className,
  datasets,
  xlabel,
  ylabel,
  legendDisplay,
  legendPosition,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Prepare chart data
  const data: ChartData<"scatter"> = useMemo(
    () => ({
      datasets: datasets.map(ds => ({
        ...ds,
        pointRadius: ds.pointRadius ?? 5,
        pointHoverRadius: ds.pointHoverRadius ?? 6,
        showLine: ds.showLine ?? false,
      })),
    }),
    [datasets]
  );

  // Chart options
  const options: ChartOptions<"scatter"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: !!xlabel,
            text: xlabel,
          },
          grid: {
            color: "rgba(220,220,220,0.3)",
          },
        },
        y: {
          title: {
            display: !!ylabel,
            text: ylabel,
          },
          grid: {
            color: "rgba(220,220,220,0.3)",
          },
        },
      },
      plugins: {
        legend: {
          display: legendDisplay ?? true,
          position: legendPosition ?? "top",
          labels: {
            font: { size: 10 },
            boxWidth: 10,
            boxHeight: 5,
            padding: 8,
            color: "#444",
          },
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: ctx => {
              const x = ctx.parsed.x?.toFixed(2);
              const y = ctx.parsed.y?.toFixed(2);
              return `${ctx.dataset.label}: (${x}, ${y})`;
            },
          },
        },
      },
    }),
    [xlabel, ylabel, legendDisplay, legendPosition]
  );

  // Lifecycle management
  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "scatter",
      data,
      options,
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [data, options]);

  return (
    <div className={className ?? ""}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ScatterPlotChart;
