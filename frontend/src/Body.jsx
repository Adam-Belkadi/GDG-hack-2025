import { Outlet } from "react-router-dom";
import NavBar from "./ComponenetsBody/navBar";

export default function Body(){
    return (<>
        <div className="body">
            <NavBar></NavBar>
            <main>
                <Outlet />
            </main>
        </div>
    </>)
}