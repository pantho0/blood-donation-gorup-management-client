import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import NavbarT from "../components/shared/NavbarT";


const MainLayout = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <NavbarT/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;