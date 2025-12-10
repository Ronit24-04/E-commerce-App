import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import shoes from "../../data/shoes";

export default function AdminProducts() {
    const [productList, setProductList] = useState(shoes);

    const deleteProduct = (id) => {
        setProductList(productList.filter((p) => p.id !== id));
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <AdminSidebar />

            <div className="p-6 w-full">
                <h1 className="text-3xl font-bold">Manage Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {productList.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">
                            <img src={item.image} className="w-full h-40 object-contain" />
                            <h2 className="font-bold mt-3">{item.name}</h2>
                            <p className="text-primary font-bold">₹{item.price}</p>

                            <button
                                onClick={() => deleteProduct(item.id)}
                                className="bg-red-500 text-white mt-4 px-4 py-2 rounded-lg w-full hover:bg-red-600"
                            >
                                Delete Product
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
