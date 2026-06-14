import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import AIChat from "../components/AiChat.tsx";
import Footer from "../components/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-ink-950 text-slate-200 antialiased">
            <NavBar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
            <AIChat/>
        </div>
    );
};

export default MainLayout;
