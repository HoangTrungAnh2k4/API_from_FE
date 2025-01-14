const SpellPage = () => {
    const spellList = Array.from({ length: 20 }).map(() => ({
        href: '/images/ninja/shishui/s_skill1.webp',
        name: 'Kĩ năng 1',
        description: 'Tạo ra một cột nước từ trên cao, tấn công mục tiêu và các mục tiêu xung quanh',
    }));

    return (
        <div className="">
            {/* h2 title */}
            <div className="mt-4 flex items-center justify-center">
                <div
                    className="h-[50px] w-[150px]"
                    style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '0 -120px' }}
                ></div>
                <h2 className="text-center text-2xl font-medium text-textColor">Các phép bổ trợ</h2>
                <div
                    className="h-[50px] w-[150px]"
                    style={{ backgroundImage: `url(/images/general/all.webp)`, backgroundPosition: '630px -120px' }}
                ></div>
            </div>

            {/* List spell */}
            <div className="mt-8 flex rounded-2xl bg-white p-8 shadow">
                <div className="flex w-fit flex-wrap gap-6">
                    {spellList.map((item, index) => (
                        <div
                            key={index}
                            className="size-24 rounded-full bg-gradient-to-br from-[#dac5aa] via-transparent via-50% to-[#dac5aa] p-[2px]"
                        >
                            <div
                                className="h-full w-full rounded-full border-4 border-transparent bg-white"
                                style={{
                                    backgroundImage: `url(${item.href})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
                <div
                    className="ml-4 h-fit w-3/6 rounded-2xl border-2 border-[#dac5aa] p-6"
                    style={{ backgroundImage: `url(/images/general/background.jpg)` }}
                >
                    <h3 className="border-b-2 border-[#cf422e] pb-2 text-center text-xl font-medium text-textColor2">
                        Sấm sét
                    </h3>
                    <p className="mt-4 rounded-lg px-3 py-2 text-justify text-textColor2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nam, magnam fugit ipsa officia
                        nostrum blanditiis totam minima amet libero alias esse omnis deserunt culpa cum exercitationem
                        dicta error praesentium!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SpellPage;
