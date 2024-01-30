// MyLearning.js
import React from 'react';
import CourseCard from './CourseCard';
import Container from '../container';

const MyLearning = ({ enrolledCourses, unenrollHandler, markAsComplete }) => {
  const handleCompleteToggle = (courseId) => {
    markAsComplete(courseId);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-950 mt-7">My Learning</h1>
      <Container>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((enrolledCourse) => (
            <CourseCard
              key={enrolledCourse.id}
              course={enrolledCourse}
              onUnenroll={() => unenrollHandler(enrolledCourse.id)}
              isEnrolled={true}
              isComplete={enrolledCourse.isComplete}
              onCompleteToggle={() => handleCompleteToggle(enrolledCourse.id)}
            />
          ))}
        </div>
      )}
      </Container>
    </div>
  );
};

export default MyLearning;
