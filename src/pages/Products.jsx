import shoes from "../data/shoes";
import ProductCard from "../components/ProductCard";

export default function Products() {
    return (
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoes.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
}
