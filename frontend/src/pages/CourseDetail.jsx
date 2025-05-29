import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Course Detail - ID: {id}</h2>
      <p>This page will show detailed info about course #{id}.</p>
    </div>
  );
}

export default CourseDetail;
