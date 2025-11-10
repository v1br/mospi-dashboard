import type { ChartDataset, Point } from "chart.js/auto";

export interface ChartCardProps {
    title: string;
    subtitle?: string;
    insights?: string;
    sources?: string[];
    children: React.ReactNode;
}

export interface DescriptionProps {
    children: React.ReactNode
}

export interface HeadingProps {
    children: React.ReactNode;
}

export interface TagProps {
    to: string
    children: React.ReactNode
}

export interface LineChartProps {
    className?: string,
    labels: string[];
    datasets: ChartDataset<"line", (number | Point | null)[]>[];
    indexAxis: "x" | "y";
    xlabel?: string;
    ylabel?: string;
    legendDisplay?: boolean;
    legendPosition?: "top" | "left" | "right" | "bottom" | "center";
}