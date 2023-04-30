import { Footer, Navbar } from '@/components';

const AppLayout = (Component: any) =>
    function AppLayout() {
        return (
            <>
                <Navbar />
                <Component />
                <Footer />
            </>
        );
    };

export default AppLayout;
