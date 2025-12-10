import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
                <p className="mt-4 text-primary">Add some shoes to get started!</p>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 max-w-4xl mx-auto">

            <h1 className="text-3xl font-bold text-primaryDark mb-6">Your Cart</h1>

            <div className="flex flex-col gap-6">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-xl p-4 gap-4"
                    >
                        <img
                            src={item.image}
                            className="w-32 h-32 object-contain"
                        />

                        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-3">
                            <div>
                                <h2 className="font-bold text-lg">{item.name}</h2>
                                <p className="text-primary font-semibold">₹{item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-2xl font-bold">Total: ₹{total}</h2>

                <button className="mt-4 bg-primary text-white w-full py-3 rounded-lg text-lg hover:bg-primaryDark">
                    Checkout
                </button>
            </div>
        </div>
    );
}
