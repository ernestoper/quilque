import React from "react";
import Div from "./Div";

const Service = ({ num, title, desc, data }) => {
    return (
        <div className="relative md:col-span-8 lg:col-span-6 border border-primary dark:border-secondary p-6  md:p-8 flex flex-col gap-y-8 justify-between focus:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral ring-primary dark:ring-secondary group">
            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]">
                {num}
            </div>
            <div className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase">
                {title}
            </div>
            <div className="hidden md:flex gap-[10px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#252525] grid py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC]">
                {desc}
            </div>
        </div>
    );
};

export default Service;
