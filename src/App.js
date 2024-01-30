// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CourseDetails from './components/CourseDetails';
import MyLearning from './components/MyLearning';
import Navbar from './components/Navbar';
import axios from 'axios';

const App = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const enrollHandler = (newCourse) => {
    if (!enrolledCourses.some((course) => course.id === newCourse.id)) {
      setEnrolledCourses((prevEnrolledCourses) => [...prevEnrolledCourses, newCourse]);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                enrollHandler={enrollHandler}
                enrolledCourses={enrolledCourses}
                courses={filteredCourses.length > 0 ? filteredCourses : courses}
              />
            }
          />
          <Route path="/details/:id" element={<CourseDetails />} />
          <Route path="/mylearning" element={<MyLearning enrolledCourses={enrolledCourses} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
