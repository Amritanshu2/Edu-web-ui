import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, onEnrollNow, isEnrolled, onMarkComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleMarkComplete = () => {
    setCompleted(true);
    if (onMarkComplete) {
      onMarkComplete(course.id);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src="./pb.jpg" alt={course.title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600">{course.body}</p>
        <div className="mt-4">
          {isEnrolled ? (
            <>
              <button
                className={`${
                  completed ? 'bg-gray-500' : 'bg-green-500'
                } text-white px-4 py-2 rounded-full mr-2`}
                disabled
              >
                {completed ? 'Completed' : 'Enrolled'}
              </button>
              {!completed && (
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-full"
                  onClick={handleMarkComplete}
                >
                  Mark as Complete
                </button>
              )}
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={onEnrollNow}
              >
                Enroll Now
              </button>
              <Link to={`/details/${course.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 ml-2 rounded-full">
                  Details
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
