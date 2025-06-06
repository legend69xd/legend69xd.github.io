import React from 'react'; // React is needed for JSX
import { useState } from 'react'; // Not needed here, but common for internal state
import PropTypes from 'prop-types'; // Optional, but good for prop validation

// Navbar component takes 'currentPage' and 'setCurrentPage' as props
export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'profile', label: 'Profile', iconClass: 'icon-profile' },
    { id: 'education', label: 'Education', iconClass: 'icon-education' },
    { id: 'experience', label: 'Experience', iconClass: 'icon-experience' },
    { id: 'projects', label: 'Projects', iconClass: 'icon-projects' },
    { id: 'skills', label: 'Skills', iconClass: 'icon-skills' },
    { id: 'extracurriculars', label: 'Activities', iconClass: 'icon-extracurriculars' },
  ];

  return (
    <div className="sidebar"> {/* Apply sidebar styling from globals.css */}
      <h2>Portfolio</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              {/* Button to change the current page */}
              <button
                onClick={() => setCurrentPage(item.id)} // Update parent component's state
                className={currentPage === item.id ? 'active' : ''} // Apply 'active' class if current page
              >
                <span className={item.iconClass}></span> {/* Icon */}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// Optional: PropTypes for type checking props
Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};