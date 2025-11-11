import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import { useRef, useEffect, useMemo } from "react";
import type { StackedAreaChartProps } from "../../types/types";

const StackedAreaChart: React.FC<StackedAreaChartProps> = ({
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

  // Prepare data
  const data: ChartData<"line"> = useMemo(() => ({
    labels,
    datasets: datasets.map(ds => ({
      ...ds,
      fill: ds.fill ?? true,           // ensure area fill
      tension: ds.tension ?? 0.3,      // smooth curves
      borderWidth: 2,
    })),
  }), [labels, datasets]);

  // Configure chart options
  const options: ChartOptions<"line"> = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    stacked: true,
    scales: {
      x: {
        title: {
          display: !!xlabel,
          text: xlabel,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
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
      filler: {
        propagate: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  }), [xlabel, ylabel, legendDisplay, legendPosition]);

  // Mount + cleanup
  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: "line",
      data,
      options,
    });

    chartInstanceRef.current = chart;

    return () => chart.destroy();
  }, [data, options]);

  return (
    <div className={className ?? ""}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default StackedAreaChart;
