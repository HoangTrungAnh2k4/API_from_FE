'use client';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const HomeContent = () => {
    return (
        <div className="main-content mx-10 flex-1">
            {/* create post */}
            <div className="flex items-center gap-6 rounded-2xl border-2 border-textColor2 border-opacity-10 bg-white px-6 py-4 shadow-sm">
                <div className="rounded-full border-[2px] border-primary px-[3px] py-[2px] pl-[2px]">
                    <div
                        className="size-8 rounded-full"
                        style={{
                            backgroundImage: `url(/images/general/logo.png)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
                <div
                    className="w-full cursor-pointer select-none rounded-lg bg-opacity-50 p-3 pl-5 text-textColor2"
                    style={{ backgroundColor: 'rgba(227, 222, 216, 0.5)' }}
                >
                    Hãy chia sẻ những suy nghĩ của bạn
                </div>
            </div>

            {/* post */}
            <div className="mt-5 space-y-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex rounded-xl bg-dark3 p-5 text-white">
                        <div className="h-[156px] min-w-[156px] rounded-xl bg-blue-200">
                            {/* <Image src="/images/general/logo.png" alt="Logo" /> */}
                        </div>
                        <div className="ml-5 flex flex-col">
                            <div className="flex">
                                <p className="line-clamp-2 text-lg font-semibold">
                                    The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about
                                    blogging and SEO
                                </p>
                                <FavoriteRoundedIcon className="hidden" />
                                <FavoriteBorderRoundedIcon className="-mt-1 size-10 cursor-pointer rounded-lg bg-dark4 p-2 hover:bg-dark4 hover:text-primary" />
                            </div>

                            <div className="mt-2 flex gap-5">
                                <div className="cursor-pointer rounded-full bg-dark4 px-3 py-1 text-xs font-semibold text-tag">
                                    rank
                                </div>
                                <div className="cursor-pointer rounded-full bg-dark4 px-3 py-1 text-xs font-semibold text-tag">
                                    madara
                                </div>
                                <div className="cursor-pointer rounded-full bg-dark4 px-3 py-1 text-xs font-semibold text-tag">
                                    2k6
                                </div>
                                <div className="cursor-pointer rounded-full bg-dark4 px-3 py-1 text-xs font-semibold text-tag">
                                    cân 3
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between gap-3">
                                <div className="flex gap-3">
                                    <div
                                        className="size-8 rounded-full"
                                        style={{
                                            backgroundImage: `url(/images/general/logo.png)`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'center',
                                        }}
                                    ></div>
                                    <div className="">
                                        <p className="text-sm font-semibold">Hoang Trung Anh</p>
                                        <p className="text-[10px] font-normal text-tag">3 ngày trước</p>
                                    </div>
                                </div>

                                <div className="flex gap-10">
                                    <p className="text-tag">10.920 likes</p>
                                    <p className="text-tag">812 comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeContent;
