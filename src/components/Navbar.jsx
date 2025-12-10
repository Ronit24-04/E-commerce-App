import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-primary text-white px-6 py-4 shadow-md">
            <div className="flex justify-between items-center">


                <Link to="/" className="text-2xl font-bold">
                    ShoeStore
                </Link>


                <button className="lg:hidden" onClick={() => setOpen(!open)}>
                    <span className="text-2xl">☰</span>
                </button>


                <div className="hidden lg:flex gap-6 text-lg">
                    <Link to="/products" className="hover:text-beige">Products</Link>
                    <Link to="/cart" className="hover:text-beige">Cart</Link>
                </div>
            </div>


            {open && (
                <div className="flex flex-col lg:hidden mt-4 gap-4">
                    <Link to="/products" className="hover:text-beige">Products</Link>
                    <Link to="/cart" className="hover:text-beige">Cart</Link>
                </div>
            )}

        </nav>
    );
}
