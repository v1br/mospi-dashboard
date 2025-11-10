import type { ChartDataset, Point } from "chart.js/auto";

export interface ChartObjectI {
    columns: string[];
    plots: Plot[];
    className?: string;
    xlabel?: string;
    ylabel?: string;
    isHorizontal?: boolean;
}

export type Plot = ChartDataset<
	"bar" | "line",
	(number | [number, number] | Point | null)[]
>;