import { Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <div className="bg-primary text-white w-full lg:w-64 p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Admin Panel</h2>

            <Link to="/admin/dashboard" className="hover:text-beige">Dashboard</Link>
            <Link to="/admin/products" className="hover:text-beige">Manage Products</Link>
            <Link to="/admin/orders" className="hover:text-beige">Orders</Link>
        </div>
    );
}
