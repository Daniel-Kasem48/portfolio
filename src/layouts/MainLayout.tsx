import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import AIChat from "../components/AiChat.tsx";

const MainLayout = () => {
    return (
        <div className=" min-h-[100vh] bg-[black] text-white bg-cover bg-no-repeat">
            <NavBar/>
            <Outlet/>
            <AIChat/>
        </div>
    );
};

export default MainLayout;
