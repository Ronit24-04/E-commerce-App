import { useParams } from "react-router-dom";
import shoes from "../data/shoes";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const item = shoes.find((s) => s.id === Number(id));
    const { addToCart } = useCart();

    return (
        <div className="p-4 sm:p-6 flex flex-col lg:flex-row gap-10">

            <img
                src={item.image}
                className="w-full lg:w-1/2 object-contain rounded-lg"
            />

            <div className="flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl font-bold">{item.name}</h1>

                <p className="text-lg mt-4">{item.description}</p>

                <p className="text-2xl font-bold text-primary mt-4">
                    ₹{item.price}
                </p>

                <button
                    onClick={() => addToCart(item)}
                    className="mt-6 bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primaryDark"
                >
                    Add to Cart
                </button>
            </div>

        </div>
    );
}
