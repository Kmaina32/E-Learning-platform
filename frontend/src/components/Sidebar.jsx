// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import "./Sidebar.css"; // or Tailwind classes directly

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">EduAfrica</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
