"use client"; // This directive marks the component as a Client Component, allowing useState.

import React, { useState } from 'react'; // Import useState for managing component state
import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Extracurriculars from '../components/Extracurriculars';
import Navbar from '../components/Navbar'; // Import the new Navbar component

export default function HomePage() {
  // State to manage the currently active section/page. Default to 'profile'.
  const [currentPage, setCurrentPage] = useState('profile');

  // Function to render the content based on the currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case 'profile':
        return (
          <>
            <Header /> {/* Header component for profile info */}
            {/* Optionally, you could add a brief 'About Me' here if you want content below the header on the profile page */}
            <div className="panel active" style={{ animationDelay: '0.2s' }}>
                <h2 className="section-title">About Me</h2>
                <p>
                    Passionate and highly motivated Cybersecurity and Quality Assurance professional with a strong foundation in
                    identifying vulnerabilities and ensuring software reliability. Eager to apply analytical skills and technical
                    expertise to dynamic challenges in information security and software testing.
                </p>
                <p>
                    My experience ranges from conducting security testing and identifying critical bugs in gaming systems to
                    developing network scanning tools and ethical keyloggers. I thrive in collaborative environments and am
                    committed to continuous improvement and securing digital infrastructures.
                </p>
            </div>
          </>
        );
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'extracurriculars':
        return <Extracurriculars />;
      default:
        return <Header />; // Fallback to Header or a default page
    }
  };

  return (
    // 'main-container' class applies global layout styles from globals.css
    <div className="main-container">
      {/* Navigation Bar - always visible */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Content Area - dynamically renders sections based on navigation */}
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
}