export default function Login() {
    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-primaryDark text-center">
                Login
            </h1>

            <input className="w-full mt-6 p-3 border rounded-lg" placeholder="Email" />
            <input className="w-full mt-4 p-3 border rounded-lg" placeholder="Password" />

            <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg">
                Login
            </button>
        </div>
    );
}
