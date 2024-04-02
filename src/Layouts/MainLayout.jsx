import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            this is main layout
            <Outlet/>
        </div>
    );
};

export default MainLayout;