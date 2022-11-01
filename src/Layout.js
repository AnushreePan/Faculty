import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout
(){
    return(
        <>
           <h1><Header/></h1>
           <h1><Outlet/></h1>
           <h1><Footer/></h1>
        </>
    );
}

export default Layout;