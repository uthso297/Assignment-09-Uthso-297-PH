import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdatePassword = () => {
    const [email, setEmail] = useState("");
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailFromQuery = params.get("email");
        if (emailFromQuery) {
            setEmail(emailFromQuery);
        }
    }, [location.search]);

    const handleResetPassword = () => {
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Password%20Reset&body=Please%20reset%20your%20password.`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Reset Password</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        readOnly
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <button
                        onClick={handleResetPassword}
                        className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
