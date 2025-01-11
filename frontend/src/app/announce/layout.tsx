import React from 'react';
import Header from '@/components/Layout/header';
import Sidebar from '@/app/announce/sidebar';

const AnnounceLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Header />
            <div
                className="mt-[64px] flex px-10 pt-5 text-white"
                style={{ backgroundImage: `url(/images/general/background.jpg)` }}
            >
                <Sidebar />
                <div className="ml-10 w-4/6">{children}</div>
            </div>
        </div>
    );
};

export default AnnounceLayout;
