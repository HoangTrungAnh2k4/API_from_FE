'use client';
import React from 'react';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PetsIcon from '@mui/icons-material/Pets';

const Sidebar = () => {
    return (
        <div className="sidebar w-1/6 text-white">
            <div className="rounded-2xl bg-dark3 p-[10px]">
                {/* each item */}
                {[
                    { Icon: RecentActorsRoundedIcon, bg: '#444F5F', color: '#5D95E8', title: 'Ninja' },
                    { Icon: AutoFixHighIcon, bg: '#335248', color: '#3ED6A4', title: 'Spell' },
                    { Icon: PetsIcon, bg: '#574D42', color: '#EA942C', title: 'Pet' },
                ].map((item, index) => (
                    <div key={index} className="mb-2 flex items-center gap-3 rounded-md p-2">
                        <div className="rounded-md p-1" style={{ backgroundColor: item.bg }}>
                            <item.Icon className="size-[32px] text-[#]" style={{ color: item.color }} />
                        </div>
                        <p className="font-medium">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
