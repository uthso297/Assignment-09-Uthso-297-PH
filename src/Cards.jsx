import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({ lessonNo }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleTutorialsClick = () => {
        navigate('/login');
    };

    return (
        <>
            {
                user?.email ? (
                    <Link to={`/start-learning/${lessonNo}`}>
                        <div className="text-lg text-gray-600 text-center font-bold max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6 cursor-pointer">
                            Text lesson: {lessonNo}
                        </div>
                    </Link>


                ) : (<div onClick={handleTutorialsClick} className="text-lg text-gray-600 text-center font-bold max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6 cursor-pointer">
                    <button>Text lesson: {lessonNo}</button>
                </div>)
            }
        </>
    );
};

Cards.propTypes = {
    lessonNo: PropTypes.string.isRequired
}

export default Cards;

