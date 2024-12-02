import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photoURL.value
        updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/profile')
                    })
                    .catch(() => {
                        // console.log(err.message);
                    });

                    
    }

    return (
        <div className="max-w-sm mx-auto p-6 border border-gray-300 rounded-lg shadow-lg my-3">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Information</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter photo URL"
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Information
          </button>
        </form>

      </div>
    );
};

export default UpdateProfile;