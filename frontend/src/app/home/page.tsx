import HomeContent from '@/app/home/contents';
import Header from '@/components/Layout/header';
import Sidebar from '@/app/home/sidebar';

const Home = () => {
    return (
        <div>
            <Header />
            {/* 64px is hight of header */}
            <div
                className="mt-[64px] flex px-10 pt-5 text-white"
                style={{
                    backgroundImage: "url('/images/general/background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Sidebar />
                <HomeContent />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;
