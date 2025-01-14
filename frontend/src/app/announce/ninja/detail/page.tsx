import Image from 'next/image';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const NinjaDetailPage = () => {
    return (
        <div className="">
            <div
                className="flex rounded-2xl p-7 shadow"
                style={{
                    backgroundImage: `url(/images/general/swc_bg.webp)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {/* avatar */}
                <div
                    className="mx-2 size-[136px] p-1"
                    style={{
                        backgroundImage: `url(/images/general/frame_avatar.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Image
                        src="/images/ninja/shishui/shishui_s_avatar.webp"
                        alt="shishui"
                        width={128}
                        height={128}
                        className="absolute rounded-lg"
                    />
                    <div className="relative left-[106px] top-[106px]">
                        <Image src="/images/general/type_S.png" alt="S" width={37} height={42} className="rounded-lg" />
                    </div>
                </div>

                {/* info */}
                <div className="ml-6 flex flex-col justify-between">
                    <h3 className="text-4xl font-medium text-textColor">Kakashi [susano]</h3>
                    <ul className="mt-6 flex gap-2">
                        <li className="rounded-lg bg-[rgba(227,222,216,0.5)] px-4 py-[2px] text-textColor2">
                            Cơ chế đặc biệt
                        </li>
                        <li className="rounded-lg bg-[rgba(227,222,216,0.5)] px-4 py-[2px] text-textColor2">
                            Khởi đầu tốt
                        </li>
                        <li className="rounded-lg bg-[rgba(227,222,216,0.5)] px-4 py-[2px] text-textColor2">
                            Độ khó cao
                        </li>
                    </ul>

                    <div className="mt-2 flex gap-1">
                        <FormatQuoteIcon className="text-textColor2" width={100} />
                        <p className="text-textColor2">Hãy đi và trở nên mạnh mẽ hơn, bạn sẽ có thể vượt qua tôi.</p>
                    </div>
                </div>
            </div>

            {/* h2 title */}
            <div className="mt-10 flex items-center justify-center">
                <div
                    className="h-[50px] w-[150px]"
                    style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '0 -120px' }}
                ></div>
                <h2 className="text-center text-2xl font-medium text-textColor">Các thông tin chi tiết</h2>
                <div
                    className="h-[50px] w-[150px]"
                    style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '630px -120px' }}
                ></div>
            </div>
            {/* detail skill */}
            <div className="mt-8 rounded-2xl bg-white p-8 pr-4 shadow">
                {/* skill navigate */}
                <div className="flex gap-4">
                    {[
                        '/images/general/normal_atk.webp',
                        '/images/ninja/shishui/s_skill1.webp',
                        '/images/ninja/shishui/s_skill2.webp',
                        '/images/ninja/shishui/s_skill3.webp',
                        '/images/ninja/shishui/s_special.png',
                    ].map((href, index) => (
                        <div
                            key={index}
                            className="size-24 rounded-full bg-gradient-to-br from-[#dac5aa] via-transparent via-50% to-[#dac5aa] p-[2px]"
                        >
                            <div
                                className="h-full w-full rounded-full border-4 border-transparent bg-white"
                                style={{
                                    backgroundImage: `url(${href})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
                {/* video and text */}
                <div className="mt-12 flex gap-4">
                    <div className="absolute h-fit border-[3px] border-textColor bg-[#d9d1c6] p-[6px]">
                        <Image
                            src={'/images/ninja/shishui/s_video.jpg'}
                            alt=""
                            className="z-0"
                            // follow width, not height
                            width={400}
                            height={225}
                        />
                        <Image
                            src={'/images/general/video-play.png'}
                            alt=""
                            className="absolute left-[180px] top-[95px] z-50 animate-spin-slow"
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="ml-auto w-[49%]">
                        <div
                            className="mx-auto w-fit border-[1px] border-textColor px-4 py-2 text-lg font-medium text-textColor"
                            style={{ backgroundImage: `url(/images/general/background.jpg)` }}
                        >
                            <p>Mô tả kĩ năng</p>
                        </div>
                        <p className="mt-4 h-[180px] overflow-y-auto pr-2 text-justify text-textColor2">
                            Susano Shisui có ba thanh năng lượng. Mỗi khi thi triển một kỹ năng, một thanh năng lượng sẽ
                            bị tiêu hao và năng lượng sẽ được phục hồi theo thời gian. Mỗi kỹ năng thứ nhất và thứ hai
                            của Susana Shisui có ba màn trình diễn khác nhau. Khi kỹ năng thứ hai và thứ ba bắn trúng
                            điều khiển ninja bị thống trị của mục tiêu để chiến đấu. Susana Shisui có ba thanh
                        </p>
                    </div>
                </div>

                {/* relation */}
                <div className="mt-12 flex">
                    {/* pet */}
                    <div className="w-1/2">
                        <h3 className="border-l-4 border-[#b83a1c] pl-2 text-lg font-medium text-textColor">
                            Linh thú
                        </h3>
                        <div className="mt-4 flex h-fit w-fit gap-10 rounded-xl bg-[#f0ede9] px-8 py-2">
                            {['/images/pet/9201001.webp', '/images/pet/9201001.webp'].map((href, index) => (
                                <div key={index}>
                                    <div className="size-20 rounded-full bg-gradient-to-br from-[#dac5aa] via-transparent via-50% to-[#dac5aa] p-[2px]">
                                        <div
                                            className="h-full w-full rounded-full border-4 border-transparent bg-white"
                                            style={{
                                                backgroundImage: `url(${href})`,
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                            }}
                                        ></div>
                                    </div>
                                    <p className="mt-1 text-center text-textColor2">Sò huyết</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* spell */}
                    <div className="">
                        <h3 className="border-l-4 border-[#b83a1c] pl-2 text-lg font-medium text-textColor">
                            Phép phụ trợ
                        </h3>
                        <div className="mt-4 flex h-fit w-fit gap-10 rounded-xl bg-[#f0ede9] px-8 py-2">
                            {['/images/spell/93501.webp', '/images/spell/93501.webp'].map((href, index) => (
                                <div key={index}>
                                    <div className="size-20 rounded-full bg-gradient-to-br from-[#dac5aa] via-transparent via-50% to-[#dac5aa] p-[2px]">
                                        <div
                                            className="h-full w-full rounded-full border-4 border-transparent bg-white"
                                            style={{
                                                backgroundImage: `url(${href})`,
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                            }}
                                        ></div>
                                    </div>
                                    <p className="mt-1 text-center text-textColor2">Sấm sét</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NinjaDetailPage;
