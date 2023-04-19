import { Footer } from "@/components";

const AppLayout = (Component: any) => function AppLayout() {
    return (
        <>
            <Component />
            <Footer />
        </>
    );
}

export default AppLayout