import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import { 
  Google, 
  Apple, 
  TelephoneFill 
} from 'react-bootstrap-icons';
import './CourseDetail.css';
import { BsPersonFill } from 'react-icons/bs'; // 'bs' means Bootstrap Icons

function CourseDetail() {
  const { id } = useParams();
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const [enrolled, setEnrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const courseData = {
    id: id,
    title: "Advanced React Development",
    instructor: "Jane Smith",
    description: "Master advanced React concepts including hooks, context API, performance optimization, and testing. Build complex applications with confidence.",
    duration: "8 weeks",
    price: "$299",
    rating: 4.7,
    studentsEnrolled: 1245,
    prerequisites: ["Basic JavaScript", "React Fundamentals"],
    syllabus: [
      { week: 1, topic: "Deep Dive into React Hooks", hours: 6 },
      { week: 2, topic: "Context API & State Management", hours: 8 },
      { week: 3, topic: "Performance Optimization", hours: 7 },
      { week: 4, topic: "Testing React Applications", hours: 6 },
      { week: 5, topic: "Advanced Component Patterns", hours: 8 },
      { week: 6, topic: "Server-Side Rendering", hours: 7 },
      { week: 7, topic: "Building a Complete Project", hours: 10 },
      { week: 8, topic: "Deployment & CI/CD", hours: 6 }
    ],
    imageUrl: "https://via.placeholder.com/400x250?text=Course+Image"
  };

  const handleEnroll = () => {
    setShowAuthModal(true);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    setEnrolled(true);
    setProgress(5);
    setShowAuthModal(false);
  };

  const handleSocialAuth = (provider) => {
    // Handle social authentication logic
    console.log(`Logging in with ${provider}`);
    setEnrolled(true);
    setProgress(5);
    setShowAuthModal(false);
  };

  return (
    <div className="course-detail-container">
      {/* Course Header */}
      <div className="course-header">
        <img src={courseData.imageUrl} alt={courseData.title} className="course-image" />
        <div className="course-meta">
          <h1>{courseData.title}</h1>
          <p className="instructor">Instructor: {courseData.instructor}</p>
          <div className="rating">
            <span className="rating-badge">{courseData.rating} ★</span>
            <span className="students">{courseData.studentsEnrolled.toLocaleString()} students</span>
          </div>
          <p className="duration">{courseData.duration} • {courseData.price}</p>
          <Button 
            variant={enrolled ? "success" : "primary"} 
            onClick={enrolled ? null : handleEnroll}
          >
            {enrolled ? "Enrolled" : "Enroll Now"}
          </Button>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-content">
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>About This Course</Card.Title>
            <Card.Text>{courseData.description}</Card.Text>
          </Card.Body>
        </Card>

        {/* Syllabus, Prerequisites, etc. would go here */}
      </div>

      {/* Authentication Modal */}
      <Modal show={showAuthModal} onHide={() => setShowAuthModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAuthSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            {!isLogin && (
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>
            )}

            <Button variant="primary" type="submit" className="w-100 mb-3">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </Form>

          <div className="text-center mb-3">— OR —</div>

          <div className="d-grid gap-2">
            <Button 
              variant="outline-danger" 
              onClick={() => handleSocialAuth('google')}
              className="d-flex align-items-center justify-content-center"
            >
              <Google className="me-2" /> Continue with Google
            </Button>

            <Button 
              variant="outline-dark" 
              onClick={() => handleSocialAuth('apple')}
              className="d-flex align-items-center justify-content-center"
            >
              <Apple className="me-2" /> Continue with Apple
            </Button>

            <Button 
              variant="outline-secondary" 
              onClick={() => handleSocialAuth('phone')}
              className="d-flex align-items-center justify-content-center"
            >
              <TelephoneFill className="me-2" /> Continue with Phone
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <span>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Button 
              variant="link" 
              onClick={() => setIsLogin(!isLogin)}
              className="p-0"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </Button>
          </span>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseDetail;