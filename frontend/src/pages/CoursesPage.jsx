import React from 'react';
import { Link } from 'react-router-dom';

const sampleCourses = [
  { id: 1, title: "React for Beginners" },
  { id: 2, title: "Python Flask Basics" },
  { id: 3, title: "Advanced JavaScript" }
];

function CoursesPage() {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {sampleCourses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesPage;
