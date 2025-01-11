'use client';

import Image from 'next/image';

const NinjaPage = () => {
    return (
        <div className="">
            {/* slider */}
            <div className="">
                <div
                    className="h-[360px] p-2"
                    style={{
                        backgroundImage: `url(/images/general/swp_box_bg.webp)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Image
                        src="/images/ninja/kakashi_s_poster.webp"
                        alt="slider"
                        width={946}
                        height={360}
                        className="rounded-lg"
                    />
                </div>
            </div>

            {/* dashboard */}
            <div
                className="mt-12 h-[300px] rounded-lg p-8"
                style={{
                    backgroundImage: `url(/images/general/swc_bg.webp)`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex items-center">
                    <label htmlFor="" className="text-textColor">
                        Tên ninja
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NinjaPage;
