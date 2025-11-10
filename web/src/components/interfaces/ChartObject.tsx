import { useEffect, useRef, useMemo } from "react";
import Chart, { type ChartData, type ChartOptions } from "chart.js/auto";
import type { ChartObjectI } from "../../types/types";

const ChartObject = ({ columns, plots, className, xlabel, ylabel, isHorizontal }: ChartObjectI) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<Chart | null>(null);

	// Chart data
	const data: ChartData<"bar" | "line"> = useMemo<ChartData<"bar" | "line">>(
		() => ({
			labels: columns,
			datasets: plots,
		}),
		[plots, columns],
	);

	// Chart options
	const options: ChartOptions<"bar" | "line"> = useMemo<
		ChartOptions<"bar" | "line">
	>(
		() => ({
			responsive: true,
			maintainAspectRatio: false,
			indexAxis: isHorizontal ? "y" : "x",
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
					display: true,
					position: "bottom",
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
		[xlabel, ylabel, isHorizontal],
	);

	useEffect(() => {
		if (!chartRef.current) return;

		// Destroy existing chart before creating a new one
		if (chartInstanceRef.current) {
			chartInstanceRef.current.destroy();
		}

		// Create new Chart instance
		chartInstanceRef.current = new Chart(chartRef.current, {
			type: "bar",
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
		<div className={className}>
			<canvas ref={chartRef} />
		</div>
	);
};

export default ChartObject;