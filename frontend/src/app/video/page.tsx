'use client';

import React from 'react';
import Header from '@/components/Layout/header';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Image from 'next/image';

const Videos = () => {
    return (
        <div>
            <Header />
            <div className="mx-auto mt-[64px] w-[80%] p-6">
                {/* navigation */}
                <div className="flex overflow-hidden rounded-t-lg bg-bgColor3">
                    <ul className="mx-auto flex flex-1 justify-between rounded-t-md px-5 pt-2">
                        <li className="w-[23%] cursor-pointer rounded-t-md bg-[#f8f6e9] px-4 py-1 text-center text-lg font-medium text-[#8a7760] hover:bg-[#f8f6e9]">
                            <p>Thông báo</p>
                            <span className="mx-auto block h-1 border-b-2 border-dotted border-[#8a7760] bg-transparent"></span>
                            <span className="mx-auto block h-1 border-b-2 border-[#8a7760]"></span>
                        </li>
                        <li className="w-[23%] cursor-pointer rounded-t-md px-4 py-1 text-center text-lg font-medium text-[#fffbef] hover:bg-[#f8f6e9] hover:text-[#8a7760]">
                            <p>Cập nhật </p>
                        </li>
                        <li className="w-[23%] cursor-pointer rounded-t-md px-4 py-1 text-center text-lg font-medium text-[#fffbef] hover:bg-[#f8f6e9] hover:text-[#8a7760]">
                            <p>Sự kiện</p>
                        </li>
                        <li className="w-[23%] cursor-pointer rounded-t-md px-4 py-1 text-center text-lg font-medium text-[#fffbef] hover:bg-[#f8f6e9] hover:text-[#8a7760]">
                            <p>Giải đấu</p>
                        </li>
                    </ul>
                    {/* search */}
                    <div className="flex items-center bg-[#f8f6e9] px-6">
                        <input
                            className="rounded-md bg-transparent px-4 py-2 text-bgColor3 outline-none placeholder:font-medium placeholder:text-bgColor3 placeholder:text-opacity-70"
                            type="text"
                            placeholder="Tìm kiếm"
                        />
                        <SearchRoundedIcon className="" />
                    </div>
                </div>
                {/* content */}
                <div className="container mx-auto mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="video-item">
                            <div className="relative aspect-[1.7] overflow-hidden rounded-lg bg-gray-300">
                                <Image
                                    src="/images/ninja/shishui/shishui_s_poster.jpg"
                                    alt="image"
                                    layout="fill"
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="ml-2 mt-2">
                                <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
                                    Tên video rất dài sẽ được cắt ở đây
                                </h3>
                                <p className="text-xs text-gray-500">Kênh • 1.2M lượt xem • 2 ngày trước</p>
                            </div>
                        </div>
                    ))}
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="video-item">
                            <div className="relative aspect-[1.7] overflow-hidden rounded-lg bg-gray-300">
                                <div
                                    className="h-full w-full"
                                    style={{
                                        backgroundImage: `url(/images/ninja/shishui/shishui_s_poster.jpg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </div>
                            <div className="ml-2 mt-2">
                                <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
                                    Tên video rất dài sẽ được cắt ở đây
                                </h3>
                                <p className="text-xs text-gray-500">Kênh • 1.2M lượt xem • 2 ngày trước</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="h-[300px] w-1/2 rounded-lg bg-gray-300 bg-top"
                    style={{
                        backgroundImage: `url(/images/ninja/shishui/shishui_s_poster.jpg)`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </div>
        </div>
    );
};

export default Videos;
