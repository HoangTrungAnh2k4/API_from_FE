import HomeContent from '@/app/home/contents';
import Header from '@/components/Layout/header';
import Sidebar from '@/app/home/sidebar';

const Home = () => {
    return (
        <div>
            <Header />
            {/* 64px is hight of header */}
            <div className="mt-[64px] flex bg-background px-10 pt-5 text-white">
                <Sidebar />
                <HomeContent />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;
