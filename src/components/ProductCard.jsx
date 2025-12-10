import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 hover:scale-105">
                <img
                    src={item.image}
                    className="w-full h-48 sm:h-56 object-contain"
                />
                <h2 className="font-bold mt-4 text-lg">{item.name}</h2>
                <p className="text-primary font-semibold text-lg">₹{item.price}</p>
            </div>
        </Link>
    );
}
