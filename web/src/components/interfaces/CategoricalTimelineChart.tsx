import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import { useRef, useEffect, useMemo } from "react";
import type { CategoricalTimelineChartProps } from "../../types/types";

const CategoricalTimelineChart: React.FC<CategoricalTimelineChartProps> = ({
  className,
  labels,
  values,
  categories,
  xlabel,
  ylabel,
  legendDisplay,
  legendPosition,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // --- Define colors for categories ---
  const categoryColors: Record<string, string> = {
    Low: "#2ca02c", // green
    Moderate: "#ff7f0e", // orange
    High: "#d62728", // red
  };

  // --- Prepare dataset for a single line ---
  const data: ChartData<"line"> = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Series",
          data: values,
          borderColor: "rgba(180,180,180,0.5)", // faint gray line
          backgroundColor: "rgba(180,180,180,0.5)",
          borderWidth: 2,
          tension: 0.3,
          fill: false,
          pointRadius: 6,
          pointHoverRadius: 8,
          // Color each point according to its category
          pointBackgroundColor: categories.map(
            c => categoryColors[c] ?? "#777"
          ),
          pointBorderColor: categories.map(
            c => categoryColors[c] ?? "#777"
          ),
        },
      ],
    }),
    [labels, values, categories]
  );

  // --- Chart options ---
  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: !!xlabel, text: xlabel },
          grid: { color: "rgba(220,220,220,0.3)" },
        },
        y: {
          title: { display: !!ylabel, text: ylabel },
          grid: { color: "rgba(220,220,220,0.3)" },
        },
      },
      plugins: {
        legend: {
          display: legendDisplay ?? true,
          position: "top", // Move legend to top
          align: "end",    // Push it to the right side of the top
          labels: {
            usePointStyle: true,       // Use circles instead of squares
            pointStyle: "circle",
            boxWidth: 8,               // Smaller circle size
            boxHeight: 8,
            font: { size: 10 },        // Smaller text
            padding: 6,
            generateLabels: _ => {
              // Custom legend showing color for each category
              return Object.keys(categoryColors).map(key => ({
                text: key,
                fillStyle: categoryColors[key],
                strokeStyle: categoryColors[key],
                lineWidth: 0,
                pointStyle: "circle",
              }));
            },
          },
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: ctx => {
              const index = ctx.dataIndex;
              const category = categories[index];
              const y = ctx.parsed?.y;
              if (y == null || isNaN(y)) return `${category ?? "Unknown"}: N/A`;
              return `${category ?? "Unknown"}: ${y.toFixed(2)}`;
            },
          },
        },
      },      
      elements: {
        point: {
          borderWidth: 2,
        },
      },
    }),
    [xlabel, ylabel, legendDisplay, legendPosition, categories]
  );

  // --- Chart lifecycle ---
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

export default CategoricalTimelineChart;
