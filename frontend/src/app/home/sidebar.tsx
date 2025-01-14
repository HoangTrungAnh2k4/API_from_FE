'use client';
import React from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar w-1/6 text-textColor2">
            <div
                className="rounded-2xl border-2 p-[10px]"
                style={{
                    backgroundImage: "url('/images/general/swc_bg.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* each item */}
                <div className="mb-2 flex items-center rounded-md bg-bgColor2 p-2">
                    {/* bg-[#444F5F] */}
                    <div className="rounded-md p-1">
                        <FiberNewRoundedIcon className="size-[32px] text-[#5D95E8]" />
                    </div>
                    <p className="ml-3 font-medium">Mới nhất </p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-bgColor2 bg-opacity-50 p-1">
                        <TimelineIcon className="size-[32px] text-[#3ED6A4]" />
                    </div>
                    <p className="ml-3 font-medium">Phổ biến hôm nay</p>
                </div>

                <div className="mb-2 flex items-center rounded-md p-2">
                    <div className="rounded-md bg-bgColor2 bg-opacity-50 p-1">
                        <PermContactCalendarOutlinedIcon className="size-[32px] text-[#EA942C]" />
                    </div>
                    <p className="ml-3 font-medium">Theo dõi </p>
                </div>
            </div>

            {/* -------------------------------------------- */}
            <div
                className="mt-5 rounded-2xl p-[10px]"
                style={{
                    backgroundImage: "url('/images/general/swc_bg.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="mb-5 ml-2 text-base font-semibold">Các tag phổ biến</h2>

                {/* each item */}
                {[
                    { color: '#5D95E8', text: '#rank', count: '82.650' },
                    { color: '#FF8F67', text: '#itachi_edo', count: '82.650' },
                    { color: '#848DF9', text: '#update', count: '82.650' },
                    { color: '#3ED6A4', text: '#nagato_young', count: '82.650' },
                    { color: '#EA942C', text: '#madara_found_village', count: '82.650' },
                ].map((item, index) => (
                    <div key={index} className="mb-2 flex items-center rounded-md p-2">
                        {/* bg-[#444F5F] */}
                        <div className="rounded-md bg-bgColor2 bg-opacity-50 p-1">
                            <LocalOfferOutlinedIcon className={`size-[32px] text-[${item.color}]`} />
                        </div>

                        <div>
                            <p className="ml-3 font-medium">{item.text} </p>
                            <p className="ml-3 text-xs font-normal text-[#97989D]">{item.count} posted</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* -------------------------------------------- */}
        </div>
    );
};

export default Sidebar;
