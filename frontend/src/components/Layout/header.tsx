'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    const pathname = usePathname();

    return (
        <header
            className="header shadow-inner-botton fixed top-0 flex h-[64px] w-full items-center justify-between p-6 text-white shadow-inner-reverse shadow-white"
            style={{ backgroundImage: `url(/images/general/bg_header.png)` }}
        >
            {/* Left */}
            <div className="header__left flex items-center font-bold text-primary">
                <Image src={'/images/general/logo.png'} alt="Logo" width={32} height={32} className="rounded-md" />
                <h1 className="ml-3 text-2xl font-semibold">Naruto mobile</h1>
            </div>

            {/* Middle */}
            <div className="header__middle flex items-center">
                <ul className="flex items-center gap-24">
                    {[
                        { href: '/home', Icon: HomeRoundedIcon },
                        { href: '/video', Icon: OndemandVideoOutlinedIcon },
                        { href: '/announce', Icon: NewspaperOutlinedIcon },
                    ].map(({ href, Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`flex size-10 cursor-pointer items-center justify-center rounded-lg ${
                                pathname.includes(href) ? 'bg-primary' : 'hover:bg-dark4 hover:text-primary'
                            }`}
                        >
                            <Icon style={{ fontSize: '30px' }} />
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Right */}
            <div className="header__right">
                <ul className="flex gap-6">
                    <li className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-2xl text-white">
                        <ChatIcon style={{ fontSize: '30px' }} />
                    </li>
                    <li className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-2xl text-white">
                        <NotificationsIcon style={{ fontSize: '30px' }} />
                    </li>
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg border-[2px] border-primary px-[3px] py-[2px] pl-[2px]">
                            <Image
                                src={'/images/general/logo.png'}
                                alt="Logo"
                                width={32}
                                height={32}
                                className="rounded-md bg-white"
                            />
                        </div>
                        <p className="font-semibold">Hoang Trung Anh</p>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Header;
