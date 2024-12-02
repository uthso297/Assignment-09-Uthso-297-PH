import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const NavBar2 = () => {

    const { setUser, handleGoogleLogin } = useContext(AuthContext);

    const navigate = useNavigate(); 

    const hadleLogin = () => {
        handleGoogleLogin()
            .then((result) => {
                setUser(result.user)
                navigate('/')

            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <div className="flex px-2 py-2 items-center justify-center bg-slate-700 gap-3">
            <h2 className="text-white">Want to login with Google?</h2>
            <button onClick={hadleLogin} className="px-2 py-2 bg-gray-400 rounded-lg flex items-center justify-between gap-2">
                <span >
                    <FcGoogle className="h-7 w-7" />
                </span>

                <span className="font-semibold">Login With Google</span>

            </button>
        </div>
    );
};

export default NavBar2;