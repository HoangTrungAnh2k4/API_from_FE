import React from 'react';
import Header from '@/components/Layout/header';
import Footer from '@/components/Layout/footer';
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
                className="mt-[64px] flex px-2 pt-5 text-white"
                style={{ backgroundImage: `url(/images/general/background.jpg)` }}
            >
                <Sidebar />
                {/* <div className="h-10 w-[250px] bg-green-200"></div> */}
                <div className="mx-auto mb-12 w-[60%]">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default AnnounceLayout;
