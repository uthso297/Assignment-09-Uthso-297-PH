import { Link, useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "./PageTitle";


const Registration = () => {

    const navigate = useNavigate();
    const { setUser, signUpUser, updateUserProfile } = useContext(AuthContext);

    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (password) => {
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const minLength = 6;

        if (!uppercase.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowercase.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        if (password.length < minLength) {
            return "Password must be at least 6 characters long.";
        }
        return "";
    };

    const handleError = (errorMessage) => {
        toast(errorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoURL.value;
        const pass = e.target.password.value;

        const passwordValidationError = validatePassword(pass);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        } else {
            setPasswordError("");
        }

        signUpUser(email, pass)
            .then(result => {
                const user = result.user;
                setUser(user);
                e.target.reset();

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");

                    })
                    .catch((err) => {
                        handleError(err.message);
                    });
            })
            .catch(error => {
                handleError(error.message);
            });
    };

    return (
        <div>
            <PageTitle title="Register||Lingo Bingo"></PageTitle>

            <section>
                <NavBar2 />
            </section>

            <div className="flex justify-center items-center min-h-screen bg-gray-100 py-7">
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {passwordError && (
                                <p className="mt-1 text-sm text-red-500">{passwordError}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?
                        <Link to="/login" className="text-blue-600 hover:underline ml-1">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}  // Correct setting for auto-close duration
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="bounce"  // Correct transition setting
            />

        </div>
    );
};

export default Registration;
