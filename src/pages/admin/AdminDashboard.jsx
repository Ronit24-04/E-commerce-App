import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
    return (
        <div className="flex flex-col lg:flex-row">
            <AdminSidebar />

            <div className="p-6 w-full">
                <h1 className="text-3xl font-bold text-primaryDark">Dashboard</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold">Total Products</h2>
                        <p className="text-3xl mt-2">8</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold">Orders</h2>
                        <p className="text-3xl mt-2">32</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-bold">Revenue</h2>
                        <p className="text-3xl mt-2">₹1,24,000</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
