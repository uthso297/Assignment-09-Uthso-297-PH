import CountUp from 'react-countup';
import banner from './assets/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import PageTitle from "./PageTitle";


const Home = () => {
  useEffect(() => {

    AOS.init({
      duration: 1500,
      easing: 'linear',
      once: true,
    });
  }, []);

  return (
    <div className="font-sans bg-gray-50">
      <PageTitle title="Home||Lingo Bingo"></PageTitle>
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">

        <div className="relative h-96 bg-gray-800" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white text-3xl md:text-4xl font-bold px-6">

            <h1>Learn German Language with Ease!</h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          </div>
        </div>

      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">About Our Platform</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to our language learning platform. We are dedicated to helping you expand your vocabulary
            and fluency in German language. Our goal is to provide interactive lessons, quizzes, and practice
            exercises to make language learning fun and effective. Join our community today and start your journey to mastering new words!
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">Our Success</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-2">
                <CountUp start={0} end={5000} duration={3} />+
              </h3>
              <p className="text-sm">Users</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-2">
                <CountUp start={0} end={10} duration={3} />
              </h3>
              <p className="text-sm">Lessons</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-2">
                <CountUp start={0} end={200} duration={3} />
                +
              </h3>
              <p className="text-sm">Vocabulary Words</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-2">
                <CountUp start={0} end={6} duration={3} />
              </h3>
              <p className="text-sm">Tutorials</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">&quot;This platform helped me learn 100 new words in just a month! Highly recommend!&quot;</p>
              <p className="mt-4 font-semibold">John Doe</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">&quot;The lessons are so easy to follow, and I feel much more confident speaking now.&quot;</p>
              <p className="mt-4 font-semibold">Jane Smith</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">&quot;I love the quizzes! They really help me reinforce what I learn.&quot;</p>
              <p className="mt-4 font-semibold">Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r from-green-400 to-teal-500 my-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Start Your Language Journey Today!</h2>
          <p className="text-lg sm:text-xl text-white mb-8">
            Whether you&apos;re a beginner or looking to enhance your German skills, our platform has everything you need to succeed. Join now and start your first lesson for free!
          </p>
          <div className="flex justify-center">
            <Link to={'/start-learning'}>

              <span className="bg-white text-teal-500 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-100 transition duration-300">
                Get Started
              </span>

            </Link>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Home;
