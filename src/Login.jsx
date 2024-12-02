import { useContext } from "react";
import NavBar2 from "./NavBar2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "./PageTitle";


const Login = () => {
    const navigate = useNavigate();
    const { setUser, signInUser } = useContext(AuthContext);

    const handleError = (p) => {
        toast.error(p);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInUser(email, pass)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                handleError(error.message);
            });
    };

    const handleForgotPassword = () => {
        const email = document.getElementById('email').value;
        navigate(`/forgot-password?email=${email}`);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <PageTitle title="Login||Lingo Bingo"></PageTitle>

            <section>
                <NavBar2 />
            </section>

            <div className="flex items-center justify-center flex-grow p-6">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-blue-500 hover:underline"
                                onClick={handleForgotPassword}
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don&apos;t have an account? Please{" "}
                            <Link to={'/registration'}>
                                <a
                                    href="/register"
                                    className="text-blue-500 hover:underline"
                                >
                                    register.
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;
