import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Clock, Person } from 'react-bootstrap-icons';
// Removed CSS import since it's causing errors (add back if you create the file)

const sampleCourses = [
  { 
    id: 1, 
    title: "React for Beginners", 
    description: "Master React fundamentals in 4 weeks",
    duration: "4 Weeks",
    instructor: "Jane Smith",
    students: 1250
  },
  { 
    id: 2, 
    title: "Python Flask Basics", 
    description: "Build web apps with Python Flask",
    duration: "6 Weeks",
    instructor: "John Doe",
    students: 890
  },
  { 
    id: 3, 
    title: "Advanced JavaScript", 
    description: "Deep dive into modern JS features",
    duration: "8 Weeks",
    instructor: "Alex Johnson",
    students: 2100
  }
];

function CoursesPage() {
  return (
    <Container className="courses-page py-5">
      <h2 className="text-center mb-5">Available Courses</h2>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {sampleCourses.map(course => (
          <Col key={course.id}>
            <Card className="h-100 shadow-sm" style={{ 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderRadius: '10px',
              overflow: 'hidden',
              border: 'none'
            }}>
              <Card.Img 
                variant="top" 
                src={`https://picsum.photos/300/200?random=${course.id}`} 
                alt={course.title}
                style={{ height: '160px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                
                <div style={{ 
                  borderTop: '1px solid #eee',
                  paddingTop: '10px',
                  marginBottom: '15px'
                }}>
                  <small className="text-muted d-block">
                    <Clock size={14} className="me-2" />
                    {course.duration}
                  </small>
                  <small className="text-muted">
                    <Person size={14} className="me-2" />
                    {course.instructor}
                  </small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary">
                    {course.students}+ students
                  </span>
                  <Button 
                    as={Link} 
                    to={`/courses/${course.id}`} 
                    variant="outline-primary"
                    size="sm"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CoursesPage;