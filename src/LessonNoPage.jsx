import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Lesson from "./Lesson";

const LessonNoPage = () => {
    const { lessonNo } = useParams(); 
    const lessonno = parseInt(lessonNo); 

    const [lessonData, setLessonData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('/vocabulary.json') 
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data"); 
                }
                return res.json();
            })
            .then(data => {
                setLessonData(data); 
                setLoading(false); 
            })
            .catch(err => {
                setError(err.message); 
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredLessons = lessonData.filter((lesson) => lesson.Lesson_no === lessonno);

    return (
        <div className="my-6">

            <div className="grid md:grid-cols-5 grid-cols-2 gap-3">
                {filteredLessons.length === 0 ? (
                    <p>No lessons found for Lesson #{lessonno}</p>
                ) : (
                    filteredLessons.map((lesson) => (
                        <Lesson key={lesson.Id} lesson={lesson} />
                    ))
                )}
            </div>

            <div className="bg-blue-700 w-3/4 flex flex-col justify-center items-center mx-auto mt-10 p-10 gap-4 rounded-lg">
                <p className="text-white text-3xl">
                    Want to go back?
                </p>

                <Link to={'/start-learning'}>
                    <button className="bg-pink-600 px-2 py-2 rounded-lg">Back to Lesson</button>
                </Link>
            </div>

        </div>
    );
};

export default LessonNoPage;
