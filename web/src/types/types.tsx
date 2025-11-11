import type { ChartDataset, Point } from "chart.js/auto";

export interface ChartCardProps {
    title: string;
    subtitle?: string;
    insights?: string;
    sources?: string[];
    flip?: boolean;
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

export interface DualLineChartProps {
    className?: string,
    labels: string[];
    datasets: ChartDataset<"line", (number | Point | null)[]>[];
    indexAxis: "x" | "y";
    xlabel?: string;
    ylabel?: string;
    ylabel2?: string;
    legendDisplay?: boolean;
    legendPosition?: "top" | "left" | "right" | "bottom" | "center";
}

export interface StackedAreaChartProps {
  className?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean | string | object;
    tension?: number;
  }[];
  xlabel?: string;
  ylabel?: string;
  legendDisplay?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
}

export interface BoxPlotChartProps {
    className?: string;
    labels: string[];
    datasets: {
      label: string;
      data: number[][]; // each box’s dataset
      borderColor?: string;
      backgroundColor?: string;
      outlierColor?: string;
      borderWidth?: number;
    }[];
    xlabel?: string;
    ylabel?: string;
    legendDisplay?: boolean;
    legendPosition?: "top" | "bottom" | "left" | "right";
}
  
export interface ForecastLineChartProps {
  className?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
    tension?: number;
    isForecast?: boolean;
  }[];
  forecastStartIndex?: number;
  xlabel?: string;
  ylabel?: string;
  legendDisplay?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
}

export interface ScatterPlotChartProps {
  className?: string;
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor?: string;
    backgroundColor?: string;
    pointRadius?: number;
    pointHoverRadius?: number;
    showLine?: boolean;
  }[];
  xlabel?: string;
  ylabel?: string;
  legendDisplay?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
}
