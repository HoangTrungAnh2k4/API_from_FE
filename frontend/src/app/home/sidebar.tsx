'use client';
import React from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar w-1/6 text-white">
            <div className="rounded-2xl bg-dark3 p-[10px]">
                {/* each item */}
                <div className="mb-2 flex items-center rounded-md bg-dark4 p-2">
                    {/* bg-[#444F5F] */}
                    <div className="bbg-dark4 rounded-md p-1">
                        <FiberNewRoundedIcon className="size-[32px] text-[#5D95E8]" />
                    </div>
                    <p className="ml-3 font-medium">Mới nhất </p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-[#335248] p-1">
                        <TimelineIcon className="size-[32px] text-[#3ED6A4]" />
                    </div>
                    <p className="ml-3 font-normal">Phổ biến hôm nay</p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-[#574D42] p-1">
                        <PermContactCalendarOutlinedIcon className="size-[32px] text-[#EA942C]" />
                    </div>
                    <p className="ml-3 font-normal">Theo dõi </p>
                </div>
            </div>

            {/* -------------------------------------------- */}
            <div className="mt-5 rounded-2xl bg-dark3 p-[10px]">
                <h2 className="mb-5 ml-2 text-base font-semibold">Các tag phổ biến</h2>

                {/* each item */}
                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#444F5F] p-1">
                        <LocalOfferOutlinedIcon className="size-[32px] text-[#5D95E8]" />
                    </div>

                    <div>
                        <p className="ml-3 font-normal">#rank </p>
                        <p className="ml-3 text-xs font-normal text-[#97989D]">82.650 posted </p>
                    </div>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#473E3B] p-1">
                        <LocalOfferOutlinedIcon className="size-[32px] text-[#FF8F67]" />
                    </div>

                    <div>
                        <p className="ml-3 font-normal">#itachi_edo </p>
                        <p className="ml-3 text-xs font-normal text-[#97989D]">82.650 posted </p>
                    </div>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#46475B] p-1">
                        <LocalOfferOutlinedIcon className="size-[32px] text-[#848DF9]" />
                    </div>

                    <div>
                        <p className="ml-3 font-normal">#update </p>
                        <p className="ml-3 text-xs font-normal text-[#97989D]">82.650 posted </p>
                    </div>
                </div>
                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#335248] p-1">
                        <LocalOfferOutlinedIcon className="size-[32px] text-[#3ED6A4]" />
                    </div>

                    <div>
                        <p className="ml-3 font-normal">#nagato_young </p>
                        <p className="ml-3 text-xs font-normal text-[#97989D]">82.650 posted </p>
                    </div>
                </div>
                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#574D42] p-1">
                        <LocalOfferOutlinedIcon className="size-[32px] text-[#EA942C]" />
                    </div>

                    <div className="w-[80%]">
                        <p className="ml-3 truncate font-normal">#madara_found_village hhshshhshshsh </p>
                        <p className="ml-3 text-xs font-normal text-[#97989D]">82.650 posted </p>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------- */}
            <div className="mt-5 rounded-2xl bg-dark3 p-[10px]">
                {/* each item */}
                <div className="mb-2 flex items-center rounded-md p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md bg-[#444F5F] p-1">
                        <FiberNewRoundedIcon className="size-[32px] text-[#5D95E8]" />
                    </div>
                    <p className="ml-3 font-normal">Mới nhất </p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-[#335248] p-1">
                        <TimelineIcon className="size-[32px] text-[#3ED6A4]" />
                    </div>
                    <p className="ml-3 font-normal">Phổ biến hôm nay</p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-[#574D42] p-1">
                        <PermContactCalendarOutlinedIcon className="size-[32px] text-[#EA942C]" />
                    </div>
                    <p className="ml-3 font-normal">Theo dõi </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
