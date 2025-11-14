import React from "react";
import type { ChartCardProps } from "../../types/types";

const ChartCard: React.FC<ChartCardProps> = ({
    title, subtitle, insights, sources, flip, children
}) => {

    const isMobile = window.innerWidth < 768;

    return (
        <div className="flex flex-col md:flex-row md:w-[88%] h-fit gap-8 mx-4 p-4 md:pr-8 bg-primary rounded-2xl my-4 shadow-xs">

            {(!flip && !isMobile) && children}

            <div className="w-full md:w-1/2 mb-4">
                <h2 className="text-lg font-semibold text-secondary">{title}</h2>
                <p className="mb-8 md:mb-0 text-sm/5 text-secondary italic">{subtitle??""}</p>

                <hr className="hidden md:block my-4 border-1 border-secondary" />
                {isMobile && children}

                <p className="mt-8 md:mt-0 text-xs text-secondary text-justify">{insights}</p>

                <div className="mt-4 flex flex-row items-center gap-2 text-xs">
                    <span className="font-semibold">Cleaned Sources:</span>
                    {sources?.map((w, i) => (
                        <div key={i} className="bg-accent2 px-2 py-1 rounded-full">
                            {w}
                        </div>
                    ))}
                </div>
            </div>

            {(flip && !isMobile) && children}
        </div>
    );
};

export default ChartCard;