import { Link } from 'react-router-dom';
import PageTitle from "./PageTitle";


const Tutorials = () => {
    return (
        <div className="container mx-auto p-4">
                  <PageTitle title="Tutorials||Lingo Bingo"></PageTitle>

            <h1 className="text-3xl font-bold text-center mb-8">German Language Tutorials</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                
                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/iB_sassbnOw?list=PLYzp2xhTw9W1Z9RvnCoveC0W7pkwUMHXy&index=2"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/S8ukFF6SdGk?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                        title="YouTube video 2"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/d54ioeKA-jc?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                        title="YouTube video 3"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/IaerX0Y6wmE?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                        title="YouTube video 4"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/HCytWm3RC9g?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                        title="YouTube video 5"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video">
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/RElBVZ1Wke0?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
                        title="YouTube video 6"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="text-center">
                <Link to="/start-learning">
                    <button className="px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 transition-colors duration-300">
                        Learn Vocabularies
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;
