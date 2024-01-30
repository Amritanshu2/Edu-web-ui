// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../container';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="bg-blue-200 shadow-sm shadow-gray-900">
      <Container className="p-2">
        <div className="flex justify-between items-center ">
          <Link to="/">
            <li>
              <img src="./educational-video.png" className="w-12 h-12" alt="Educational Video" />
            </li>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <input
                type="text"
                className="border-2 border-blue-300 p-1 rounded bg-transparent text-xl outline-none focus:border-blue-400 transition text-blue-700"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </li>
            <li>
              <button onClick={handleSearch}>Search</button>
            </li>
            <Link to="/MyLearning">
              <li>
                <img src="./user.png" className="w-12 h-12" alt="User" />
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
