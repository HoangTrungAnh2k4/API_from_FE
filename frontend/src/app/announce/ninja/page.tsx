'use client';

import Image from 'next/image';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Link from 'next/link';

const NinjaPage = () => {
    return (
        <div className="mb-10">
            {/* slider */}
            <div className="">
                <div
                    className="h-[336px] p-2"
                    style={{
                        backgroundImage: `url(/images/general/swp_box_bg.webp)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        className="h-full w-full rounded-md"
                        style={{
                            backgroundImage: `url(/images/ninja/kakashi/kakashi_s_poster.webp)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
            </div>

            {/* dashboard */}
            <div className="mt-6 flex flex-col gap-2 rounded-2xl bg-white px-8 py-10 shadow">
                <div className="flex items-center">
                    <div
                        className="b -mb-[2px] mr-3 h-[24px] w-[23px]"
                        style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '-7px -5px' }}
                    >
                        {' '}
                    </div>
                    <label htmlFor="charName" className="w-40 text-lg font-semibold text-textColor">
                        Tên ninja
                    </label>
                    <input
                        type="text"
                        id="charName"
                        placeholder="Bạn đang tìm ninja nào"
                        className="rounded-md border-[1px] border-textColor px-6 py-1 text-[#a69a8b] outline-none"
                    />
                    <button className="ml-10 cursor-pointer rounded-md border-[1px] border-[#cf422e] px-4 py-1 text-base text-[#cf422e] hover:shadow-inner hover:shadow-[#cf422e]">
                        Tìm kiếm
                    </button>
                </div>

                <div className="mt-5 flex items-center">
                    <div
                        className="b -mb-[2px] mr-3 h-[24px] w-[23px]"
                        style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '-7px -5px' }}
                    >
                        {' '}
                    </div>
                    <label className="w-40 text-lg font-semibold text-textColor">Cấp độ ninja</label>
                    <ul className="flex gap-4">
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-bgColor2">
                            S
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-bgColor2">
                            A
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-bgColor2">
                            B
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-bgColor2">
                            C
                        </li>
                    </ul>
                </div>

                <div className="mt-5 flex items-start">
                    <div
                        className="b -mb-[2px] mr-3 h-[24px] min-w-[23px]"
                        style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '-7px -5px' }}
                    >
                        {' '}
                    </div>
                    <label className="min-w-40 text-lg font-semibold text-textColor">Đặc tính ninja</label>
                    <ul className="flex flex-wrap gap-4">
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Sát thương cao
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Phạm vi rộng
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Cơ động cao
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Khả năng đột biến
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Khống chế mạnh
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Khởi đầu tốt
                        </li>
                        <li className="cursor-pointer rounded-md border-[1px] border-textColor px-6 py-1 text-textColor hover:bg-[#f8ddba]">
                            Cơ chế đặc biệt
                        </li>
                    </ul>
                </div>
            </div>

            {/* list ninja */}
            <div className="mt-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <Link
                                href="ninja/detail"
                                className="mx-2 size-[136px] p-1 transition-all hover:scale-110"
                                style={{
                                    backgroundImage: `url(/images/general/frame_avatar.png)`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div
                                    className="size-32"
                                    style={{
                                        backgroundImage: `url(/images/ninja/kakashi/kakashi_s_avatar.webp)`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                    }}
                                ></div>
                                <div className="relative left-[106px] top-[-20px]">
                                    <Image
                                        src="/images/general/type_S.png"
                                        alt="S"
                                        width={37}
                                        height={42}
                                        className="rounded-lg"
                                    />
                                </div>
                            </Link>

                            <p className="mt-2 text-lg font-medium text-textColor">Kakashi </p>
                            <p className="text-lg font-medium text-textColor"> [susano]</p>
                        </div>
                    ))}
                </div>
                {/* pagination */}
                <div className="ml-auto mt-10 flex items-center justify-center gap-4 text-textColor">
                    <button className="size-[38px] rounded-md border-[2px] border-textColor hover:bg-bgColor2">
                        <ArrowBackIosOutlinedIcon />
                    </button>

                    <p className="text-lg font-medium">1/2</p>

                    <button className="size-[38px] rounded-md border-[2px] border-textColor hover:bg-bgColor2">
                        <ArrowForwardIosOutlinedIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NinjaPage;
