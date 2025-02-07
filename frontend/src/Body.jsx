import { Outlet } from "react-router-dom";

export default function Body(){
    return (<>
        <div className="body">
            <navBar></navBar>
            <main>
                <Outlet />
            </main>
        </div>
    </>)
}