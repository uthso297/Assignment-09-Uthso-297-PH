import image from './assets/uthso.jpg'
import PageTitle from "./PageTitle";


const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center py-12 px-6">
      <PageTitle title="AboutUs||Lingo Bingo"></PageTitle>

      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
        <div className="flex justify-center py-8 bg-blue-500 text-white">
          <h1 className="text-3xl font-semibold">About Md. Sihab Mahmud Uthso</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center px-6 py-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              src={image}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-6 md:mt-0 md:ml-8 text-gray-700">
            <p className="text-xl font-semibold">Md. Sihab Mahmud Uthso</p>
            <p className="text-md mt-2">Software Engineering Student at Daffodil International University</p>
            <p className="text-md mt-2">Currently in 3rd Semester | CGPA: 3.92</p>

            <div className="mt-6">
              <p className="font-semibold text-lg">Skills:</p>
              <ul className="list-disc ml-6 text-sm mt-2">
                <li>HTML, CSS, Tailwind CSS</li>
                <li>JavaScript, React</li>
                <li>Java, C, C++</li>
                <li>Data Structures & Algorithms (DSA)</li>
                <li>Object-Oriented Programming (OOP)</li>
              </ul>
            </div>

            <div className="mt-6 space-x-4">
              <a
                href="https://github.com/uthso297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-sihab-mahmud-uthso-147651317/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
