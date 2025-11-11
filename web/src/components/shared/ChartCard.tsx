import React from "react";
import type { ChartCardProps } from "../../types/types";

const ChartCard: React.FC<ChartCardProps> = ({
    title, subtitle, insights, children
}) => {

    return (
        <div className="flex flex-col md:flex-row w-[88%] h-fit gap-8 mx-4 p-4 bg-primary rounded-2xl">
            {children}
            <div className="w-full md:w-1/2 mb-4">
                <h2 className="text-lg font-semibold text-secondary">{title}</h2>
                <p className="text-sm/5 text-secondary italic">{subtitle??""}</p>
                <hr className="my-4 border-1 border-secondary" />
                <p className="text-xs text-secondary text-justify">{insights}</p>
            </div>
        </div>
    );
};

export default ChartCard;