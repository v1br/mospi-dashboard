import React from "react";

interface ChartCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({
    title, subtitle, children
}) => {

    return (
        <div className="bg-white p-4 w-full h-fit mx-auto border-2 border-green-300">
            <h2 className="text-lg font-semibold text-secondary">{title}</h2>
            {subtitle && <p className="text-sm text-secondary mb-2">{subtitle}</p>}
            <div className="min-h-60">{children}</div>
        </div>
    );
};

export default ChartCard;