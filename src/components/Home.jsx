// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from '../container';
import CourseCard from './CourseCard';

const Home = ({ enrollHandler, enrolledCourses, courses }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, [courses]);

  return (
    <Container>
      <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : courses.length === 0 ? (
          <p>No courses available.</p>
        ) : (
          courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnrollNow={() => enrollHandler(course)}
              isEnrolled={enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id)}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Home;
