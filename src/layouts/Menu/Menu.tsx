import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}