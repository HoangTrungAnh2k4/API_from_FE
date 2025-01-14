'use client';

const Announce = () => {
    return (
        <div className="">
            <div
                className="mx-auto h-[120px] w-[400px]"
                style={{
                    backgroundImage: `url(/images/general/wrap-title.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div
                className="-mt-6 h-[500px] px-[90px] pt-[60px]"
                style={{
                    backgroundImage: `url(/images/general/part3-box.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* navigation */}
                <ul className="bg-bgColor3 mx-auto flex justify-between rounded-t-md px-5 pt-2">
                    <li className="w-[23%] rounded-t-md bg-[#f8f6e9] px-4 py-1 text-center text-lg font-medium text-[#8a7760] hover:bg-[#f8f6e9]">
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

                {/* content */}
                <ul className="h-[330px] overflow-auto">
                    <li className="hover:bg-bgColor3 flex cursor-pointer gap-4 border-b-[1px] border-textColor border-opacity-20 px-4 py-4 text-textColor2 hover:bg-opacity-10">
                        <div
                            className="b my-auto mr-3 h-[24px] w-[23px] shrink-0 animate-spin-slow"
                            style={{
                                backgroundImage: `url(/images/general/all.webp)`,
                                backgroundPosition: '-7px -5px',
                            }}
                        >
                            {' '}
                        </div>
                        <p className="line-clamp-2 text-justify">
                            <span className="font-medium">[10/11/2024]</span> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum, modi assumenda inventore molestiae alias qui praesentium. Provident
                            voluptatibus voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi
                            assumenda inventore molestiae alias qui praesentium. Provident voluptatibus voluptatem
                        </p>
                    </li>
                    <li className="hover:bg-bgColor3 flex cursor-pointer gap-4 border-b-[1px] border-textColor border-opacity-20 px-4 py-4 text-textColor2 hover:bg-opacity-10">
                        <div
                            className="b my-auto mr-3 h-[24px] w-[23px] shrink-0 animate-spin-slow"
                            style={{
                                backgroundImage: `url(/images/general/all.webp)`,
                                backgroundPosition: '-7px -5px',
                            }}
                        >
                            {' '}
                        </div>
                        <p className="line-clamp-2 text-justify">
                            <span className="font-medium">[10/11/2024]</span> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum, modi assumenda inventore molestiae alias qui praesentium. Provident
                            voluptatibus voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi
                            assumenda inventore molestiae alias qui praesentium. Provident voluptatibus voluptatem
                        </p>
                    </li>
                    <li className="hover:bg-bgColor3 flex cursor-pointer gap-4 border-b-[1px] border-textColor border-opacity-20 px-4 py-4 text-textColor2 hover:bg-opacity-10">
                        <div
                            className="b my-auto mr-3 h-[24px] w-[23px] shrink-0 animate-spin-slow"
                            style={{
                                backgroundImage: `url(/images/general/all.webp)`,
                                backgroundPosition: '-7px -5px',
                            }}
                        >
                            {' '}
                        </div>
                        <p className="line-clamp-2 text-justify">
                            <span className="font-medium">[10/11/2024]</span> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum, modi assumenda inventore molestiae alias qui praesentium. Provident
                            voluptatibus voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi
                            assumenda inventore molestiae alias qui praesentium. Provident voluptatibus voluptatem
                        </p>
                    </li>
                    <li className="hover:bg-bgColor3 flex cursor-pointer gap-4 border-b-[1px] border-textColor border-opacity-20 px-4 py-4 text-textColor2 hover:bg-opacity-10">
                        <div
                            className="b my-auto mr-3 h-[24px] w-[23px] shrink-0 animate-spin-slow"
                            style={{
                                backgroundImage: `url(/images/general/all.webp)`,
                                backgroundPosition: '-7px -5px',
                            }}
                        >
                            {' '}
                        </div>
                        <p className="line-clamp-2 text-justify">
                            <span className="font-medium">[10/11/2024]</span> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Harum, modi assumenda inventore molestiae alias qui praesentium. Provident
                            voluptatibus voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, modi
                            assumenda inventore molestiae alias qui praesentium. Provident voluptatibus voluptatem
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Announce;
