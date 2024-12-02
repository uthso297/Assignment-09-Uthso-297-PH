import { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PageTitle from './PageTitle';

const Lesson = ({ lesson }) => {
    const { word, pronunciation, meaning, part_of_speech, difficulty, when_to_say, example } = lesson;

    const param = useParams();

    // console.log(param);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    const openModal = () => setIsModalOpen(true);

    const difficultyColors = {
        easy: 'bg-green-200',
        medium: 'bg-yellow-200',
        hard: 'bg-red-200',
    };

    const speakPronunciation = () => {
        if (pronunciation) {
            const utterance = new SpeechSynthesisUtterance(pronunciation);
            utterance.lang = 'de-DE';
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
            // console.log('Pronunciation spoken');
        } else {
            console.warn('No pronunciation available');
        }
    };


    return (
        <div onClick={speakPronunciation} className={`max-w-sm rounded overflow-hidden shadow-lg ${difficultyColors[difficulty] || 'bg-gray-200'} p-4 cursor-pointer`}>
            <PageTitle title={`Lesson no:${param.lessonNo} || Lingo Bingo`}></PageTitle>
            <h3 className="text-2xl font-semibold text-gray-800">{word}</h3>
            <p className="text-sm text-gray-500 italic">({pronunciation})</p>

            <p className="text-lg text-gray-700 mt-2">
                <strong className="font-semibold">Parts of speach: {part_of_speech}</strong>
            </p>
            <p>
                Meaning: {meaning}
            </p>
            <p>
                Difficulty: {difficulty}
            </p>
            <button
                onClick={openModal}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
                When to say
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-1/2">
                        <h3 className="text-xl font-semibold">{word}</h3>
                        <p className="mt-2"><strong>Meaning:</strong> {meaning}</p>
                        <p className="mt-2"><strong>When to say:</strong> {when_to_say}</p>
                        <p className="mt-2"><strong>Example:</strong> {example}</p>

                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Lesson.propTypes = {
    lesson: PropTypes.object.isRequired
}

export default Lesson;
