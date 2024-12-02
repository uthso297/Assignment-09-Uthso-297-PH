import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {



  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">YKSG-1 Hall,DIU</p>
            <p className="mb-2">Daffodil International University,Dhaka</p>
            <p className="mb-2">Email: uthso119464@gmail.com</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-300 transition-colors" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">&copy; 2024 Lingo Bingo. All rights reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
