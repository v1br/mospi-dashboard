import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import { useRef, useEffect, useMemo } from "react";
import type { ForecastLineChartProps } from "../../types/types";

const ForecastLineChart: React.FC<ForecastLineChartProps> = ({
  className,
  labels,
  datasets,
  forecastStartIndex,
  xlabel,
  ylabel,
  legendDisplay,
  legendPosition,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Prepare chart data
  const data: ChartData<"line"> = useMemo(
    () => ({
      labels,
      datasets: datasets.map(ds => ({
        ...ds,
        borderDash: ds.isForecast ? [6, 6] : [], // dashed line for forecast
        borderWidth: 2,
        tension: ds.tension ?? 0.3,
        fill: ds.fill ?? false,
      })),
    }),
    [labels, datasets]
  );

  // Prepare chart options
  const options: ChartOptions<"line"> = useMemo(
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
              const label = ctx.dataset.label || "";
              const val = ctx.parsed.y;
              return `${label}: ${val}`;
            },
          },
        },
        annotation: forecastStartIndex
          ? {
              annotations: {
                forecastLine: {
                  type: "line",
                  xMin: labels[forecastStartIndex],
                  xMax: labels[forecastStartIndex],
                  borderColor: "rgba(255, 99, 132, 0.8)",
                  borderWidth: 2,
                  borderDash: [4, 4],
                  label: {
                    display: true,
                    content: "Forecast Start",
                    position: "start",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    color: "#444",
                  },
                },
              },
            }
          : undefined,
      },
    }),
    [xlabel, ylabel, legendDisplay, legendPosition, labels, forecastStartIndex]
  );

  // Chart lifecycle
  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "line",
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

export default ForecastLineChart;
