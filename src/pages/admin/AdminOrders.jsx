import AdminSidebar from "../../components/AdminSidebar";

export default function AdminOrders() {
    const orders = [
        { id: 1, customer: "John Malik", total: 4999, status: "Delivered" },
        { id: 2, customer: "Amir Khan", total: 8999, status: "Pending" },
        { id: 3, customer: "Ravindra Sahane", total: 12999, status: "Shipped" },
    ];

    return (
        <div className="flex flex-col lg:flex-row">
            <AdminSidebar />

            <div className="p-6 w-full">
                <h1 className="text-3xl font-bold">Orders</h1>

                <div className="bg-white rounded-xl shadow-md mt-6 p-4">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="flex justify-between border-b py-3 last:border-none"
                        >
                            <p>{order.customer}</p>
                            <p>₹{order.total}</p>
                            <p className="font-bold">{order.status}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
