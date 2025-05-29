import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Book, People, Award, CheckCircle } from 'react-bootstrap-icons';
import './HomePage.css'; // (Optional: for custom styles)

function HomePage() {
  // Sample data (replace with real API data later)
  const featuredCourses = [
    { id: 1, title: 'Web Development', instructor: 'John Doe', students: 500 },
    { id: 2, title: 'Data Science', instructor: 'Jane Smith', students: 300 },
    { id: 3, title: 'Mobile App Dev', instructor: 'Alex Johnson', students: 250 },
  ];

  const testimonials = [
    { id: 1, name: 'Sarah K.', quote: 'This platform changed my career!' },
    { id: 2, name: 'Mike T.', quote: 'Best courses I’ve ever taken.' },
    { id: 3, name: 'Lisa M.', quote: 'Highly recommend EduAfrica!' },
  ];

  return (
    <div className="home-page">
      {/* --- Hero Section --- */}
      <section className="hero-section text-center py-5 bg-primary text-white">
        <Container>
          <h1 className="display-4 fw-bold">Welcome to <span className="text-warning">EduAfrica</span></h1>
          <p className="lead">Learn from the best courses online, anywhere and anytime.</p>
          <Button variant="warning" size="lg" className="mt-3">
            Explore Courses
          </Button>
        </Container>
      </section>

      {/* --- Features Section --- */}
      <section className="features-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <Book size={40} className="text-primary mb-3" />
              <h4>100+ Courses</h4>
              <p>Diverse topics from experts</p>
            </Col>
            <Col md={3} className="text-center">
              <People size={40} className="text-primary mb-3" />
              <h4>Expert Instructors</h4>
              <p>Learn from industry leaders</p>
            </Col>
            <Col md={3} className="text-center">
              <Award size={40} className="text-primary mb-3" />
              <h4>Certifications</h4>
              <p>Get recognized for your skills</p>
            </Col>
            <Col md={3} className="text-center">
              <CheckCircle size={40} className="text-primary mb-3" />
              <h4>Lifetime Access</h4>
              <p>Learn at your own pace</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Featured Courses --- */}
      <section className="courses-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Featured Courses</h2>
          <Row className="g-4">
            {featuredCourses.map((course) => (
              <Col key={course.id} md={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={`https://picsum.photos/300/200?random=${course.id}`} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                      Instructor: {course.instructor}<br />
                      Students: {course.students}+
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">Enroll Now</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* --- Testimonials --- */}
      <section className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Students Say</h2>
          <Carousel indicators={false} className="testimonial-carousel">
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="text-center p-4">
                  <p className="fs-4 fst-italic">"{testimonial.quote}"</p>
                  <p className="fw-bold">— {testimonial.name}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* --- CTA Section --- */}
      <section className="cta-section py-5 bg-dark text-white text-center">
        <Container>
          <h2>Ready to Start Learning?</h2>
          <p className="lead mb-4">Join thousands of students today.</p>
          <Button variant="warning" size="lg">
            Sign Up for Free
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;