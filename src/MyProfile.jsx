import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useNavigate } from 'react-router-dom';
import PageTitle from "./PageTitle";



const MyProfile = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate('/updateprofile');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-4">
            <PageTitle title="Myprofile||Lingo Bingo"></PageTitle>

            <h1 className="text-3xl font-semibold text-center mb-6">Welcome,{user?.displayName}!</h1>

            <div className="flex items-center mb-6 md:w-1/4 md:mx-auto gap-3">
                <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleUpdateClick}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default MyProfile;
