import { useContext } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import PageTitle from "./PageTitle";

const StartLearning = () => {


    const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleView = ()=>{
        if(user){
            navigate('/tutorials')
        }
        else{
            navigate('/login')
        }
    }

    return (
        <div className="my-4">
            <PageTitle title="Start Learning||Lingo Bingo"></PageTitle>
            <div className="grid md:grid-cols-5 gap-4 grid-cols-3">
                {lessons.map((lessonNo) => (
                    <div key={lessonNo} className="lesson-card-container">
                        <Cards lessonNo={lessonNo}></Cards>

                    </div>
                ))}
            </div>

            <div className="py-8 px-4 bg-gray-50 text-center mb-3">

                <div className="flex justify-center">
                    <iframe

                        src="https://www.youtube.com/embed/7jP9Aw88h2Y"
                        title="Alphabet Learning Tutorial"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full max-w-4xl h-[400px] rounded-lg"
                    ></iframe>
                </div>
            </div>
            <div className="text-center">
                <button onClick={handleView}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    View More
                </button>

            </div>
        </div>
    );
};

export default StartLearning;
