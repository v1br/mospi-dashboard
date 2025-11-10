import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import { useRef, useEffect, useMemo } from "react";
import type { LineChartProps } from "../../types/types";

const LineChart: React.FC<LineChartProps> = ({
    className, labels, datasets, indexAxis, xlabel, ylabel, legendDisplay, legendPosition
}) => {

	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<Chart | null>(null);

	// Chart data
	const data: ChartData<"line"> = useMemo<ChartData<"line">>(
		() => ({
			labels: labels,
			datasets: datasets,
		}),
		[labels, datasets],
	);

    // Chart options
    const options: ChartOptions<"bar" | "line"> = useMemo<
    ChartOptions<"bar" | "line">
    >(
    () => ({
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: indexAxis,
        scales: {
            x: {
                title: {
                    display: xlabel ? true : false,
                    text: xlabel,
                },
            },
            y: {
                title: {
                    display: ylabel ? true : false,
                    text: ylabel,
                },
                ticks: {},
            },
        },
        plugins: {
            legend: {
                display: legendDisplay ?? true,
                position: legendPosition ?? "top",
                labels: {
                    color: "black",
                    font: { size: 14 },
                    boxWidth: 16,
                    boxHeight: 8,
                    usePointStyle: false,
                    pointStyle: "circle",
                },
            },
        },
    }),
    [xlabel, ylabel, indexAxis, legendPosition],
    );

    // Cleanup effect
	useEffect(() => {
		if (!chartRef.current) return;

		if (chartInstanceRef.current) {
			chartInstanceRef.current.destroy();
		}

		chartInstanceRef.current = new Chart(chartRef.current, {
			type: "line",
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
}

export default LineChart