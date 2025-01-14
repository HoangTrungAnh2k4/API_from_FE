'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

const Sidebar = () => {
    const pathname = usePathname();
    const sidebarItems = [
        {
            Icon: FeedOutlinedIcon,
            href: '/announce',
            bg: '#473E3B',
            color: '#FF8F67',
            title: 'Thông tin chung',
        },
        {
            Icon: RecentActorsOutlinedIcon,
            href: '/announce/ninja',
            bg: '#444F5F',
            color: '#5D95E8',
            title: 'Ninja',
        },
        {
            Icon: AutoFixHighOutlinedIcon,
            href: '/announce/spell',
            bg: '#335248',
            color: '#3ED6A4',
            title: 'Phép phụ trợ',
        },
        {
            Icon: PetsIcon,
            href: '/announce/pet',
            bg: '#574D42',
            color: '#EA942C',
            title: 'Linh thú',
        },
    ];

    return (
        <div
            className="sidebar fixed h-[400px] w-[250px] rounded-2xl px-7 pt-10 text-textColor"
            style={{
                backgroundImage: `url(/images/general/bg_sidebar.webp)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* each item */}
            {sidebarItems.map((item, index) => {
                return (
                    <Link
                        href={item.href}
                        key={index}
                        className={`mb-2 flex items-center gap-3 rounded-md bg-opacity-70 p-2 hover:bg-[#a59075] hover:bg-opacity-70 hover:text-[#fffbef] ${
                            pathname === item.href ? 'bg-[#a59075] bg-opacity-70' : ''
                        }`}
                    >
                        <div
                            className={`p-1} rounded-md bg-[#a59075] bg-opacity-50 ${
                                pathname === item.href ? 'bg-transparent' : ''
                            }`}
                        ></div>
                        <p className={`text-[#fffbef]" font-medium ${pathname === item.href ? 'text-[#fffbef]' : ''}`}>
                            {item.title}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Sidebar;
