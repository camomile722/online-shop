import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header />
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
            <Footer />
        </>
    );
};
