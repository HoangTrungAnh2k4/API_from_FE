'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PetsIcon from '@mui/icons-material/Pets';
import FeedIcon from '@mui/icons-material/Feed';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="sidebar w-1/6 text-white">
            <div className="rounded-2xl bg-dark3 p-[10px]">
                {/* each item */}
                {[
                    {
                        Icon: FeedIcon,
                        href: '/announce',
                        bg: '#473E3B',
                        color: '#FF8F67',
                        title: 'Thông tin chung',
                    },
                    {
                        Icon: RecentActorsRoundedIcon,
                        href: '/announce/ninja',
                        bg: '#444F5F',
                        color: '#5D95E8',
                        title: 'Ninja',
                    },
                    { Icon: AutoFixHighIcon, href: '/announce/spell', bg: '#335248', color: '#3ED6A4', title: 'Spell' },
                    { Icon: PetsIcon, href: 'announce/pet', bg: '#574D42', color: '#EA942C', title: 'Pet' },
                ].map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className={`mb-2 flex items-center gap-3 rounded-md p-2 hover:bg-dark4 ${pathname === item.href ? 'bg-dark4' : ''} `}
                    >
                        <div
                            className={`rounded-md p-1 ${pathname === item.href ? 'bg-dark4' : ''}`}
                            style={{ backgroundColor: pathname === item.href ? '' : item.bg }}
                        >
                            <item.Icon className="size-[32px]" style={{ color: item.color }} />
                        </div>
                        <p className="font-medium">{item.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
