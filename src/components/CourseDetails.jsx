import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    title: 'Sample Course',
    instructor: 'Abc',
    body: 'This is a sample course description.',
    enrollmentStatus: 'Open',
    duration: '4 weeks',
    schedule: 'Monday and Wednesday, 3:00 PM - 5:00 PM',
    location: 'Virtual Classroom',
    prerequisites: 'Basic knowledge of programming',
    syllabus: 'Week 1: Introduction to the Course\nWeek 2: Core Concepts\n...',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        // Assuming the response.data structure is { title, body }
        const { title, body } = response.data;

        setCourse((prevCourse) => ({
          ...prevCourse,
          title: title || prevCourse.title,
          body: body || prevCourse.body,
        }));
      } catch (error) {
        console.error('Error fetching course details:', error);
        setError(error.message || 'An error occurred while fetching course details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg font-semibold mb-2">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-2">{course.body}</p>
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">Enrollment Status: {course.enrollmentStatus}</p>
        <p className="text-lg font-semibold">Course Duration: {course.duration}</p>
        <p className="text-lg font-semibold">Schedule: {course.schedule}</p>
        <p className="text-lg font-semibold">Location: {course.location}</p>
        <p className="text-lg font-semibold">Pre-requisites: {course.prerequisites}</p>
      </div>
      {/* Rest of the component remains unchanged */}
      <details>
        <summary className="text-lg font-semibold mb-2">Syllabus</summary>
        <p className="text-gray-600">{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetails;
